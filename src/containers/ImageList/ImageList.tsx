import React, { useEffect, useState } from "react";
import "regenerator-runtime/runtime";
import ImageBrowser from "../../components/ImageBrowser/ImageBrowser";

const ImageList: React.FC = (): JSX.Element => {
  const { default: data } = require("@solid/query-ldflex");
  const [imageURLs, setImages] = useState([] as string[]);
  const datasource =
    data["https://nikosiltaloppi.solid.community/private/pictures/"];

  async function fetchImageURLs(person: { ldp_contains: any }) {
    let imageLinksBuffer: string[] = [];
    for await (const imageURL of person.ldp_contains) {
      imageLinksBuffer.push(imageURL as string);
    }
    setImages(imageLinksBuffer);
  }

  useEffect(() => {
    (async () => {
      await fetchImageURLs(datasource);
    })();
  }, []);

  return (
    <div>
      <ImageBrowser imageURLs={imageURLs} />
    </div>
  );
};

export default ImageList;
