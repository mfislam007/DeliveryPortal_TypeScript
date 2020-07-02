import React, { useEffect, useState } from "react";
import "regenerator-runtime/runtime";
import ImageBrowser from "../../components/ImageBrowser/ImageBrowser";

interface Props {
  dataSource: string;
}

const ImageList: React.FC<Props> = (props): JSX.Element => {
  const { default: data } = require("@solid/query-ldflex");
  const [imageURLs, setImages] = useState([] as string[]);
  const dataSource = data[props.dataSource];

  async function fetchImageURLs(person: { ldp_contains: string }) {
    let imageLinksBuffer: string[] = [];
    for await (const imageURL of person.ldp_contains) {
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
    <div>
      <ImageBrowser imageURLs={imageURLs} />
    </div>
  );
};

export default ImageList;
