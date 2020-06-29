import React, { useEffect } from "react";
import "regenerator-runtime/runtime";
import ImageBrowser from "../../components/ImageBrowser/ImageBrowser";

const ImageList: React.FC = (): JSX.Element => {
  const { default: data } = require("@solid/query-ldflex");
  let images: string[] = [];
  const datasource =
    data["https://nikosiltaloppi.solid.community/private/pictures/"];

  useEffect(() => {
    async function getImages(person: { ldp_contains: any }) {
      for await (const image of person.ldp_contains) {
        images.push(`${image}`);
        //console.log(images);
      }
    }
    getImages(datasource);
  }, []);

  return (
    <div>
      <ImageBrowser imagelist={images} />
    </div>
  );
};

export default ImageList;
