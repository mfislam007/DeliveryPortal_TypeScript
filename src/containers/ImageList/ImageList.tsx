import React, { useEffect, useState } from "react";
import "regenerator-runtime/runtime";

import ImageBrowser from "../../components/ImageBrowser/ImageBrowser";
import "./ImageList.scss";

type Props = {
  dataSource: string;
};

const ImageList: React.FC<Props> = (props): JSX.Element => {
  const { default: data } = require("@solid/query-ldflex");
  const [imageURLs, setImages] = useState([] as string[]);
  const dataSource = data[props.dataSource];

  async function fetchImageURLs(img: { ldp_contains: string }) {
    let imageLinksBuffer: string[] = [];

    for await (const imageURL of img.ldp_contains) {
      imageLinksBuffer.push(imageURL as string);
    }

    setImages(imageLinksBuffer);
  }

  useEffect(() => {
    (async () => {
      await fetchImageURLs(dataSource);
    })();
  }, []);

  return (
    <div className="imagelist">
      <ImageBrowser imageURLs={imageURLs} />
    </div>
  );
};

export default ImageList;
