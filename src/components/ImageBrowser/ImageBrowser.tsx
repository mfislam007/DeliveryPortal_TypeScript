import React from "react";
import "regenerator-runtime/runtime";

interface imageProps {
  imagelist: string[];
}

const ImageBrowser: React.FC<imageProps> = (props: imageProps) => {
  console.log(props.imagelist);

  const imageobject = props.imagelist.map((image, index) => (
    <div key={index}>
      <img width="100%" height="100%" src={image} alt="" />
    </div>
  ));

  const testClick = () => {
    console.log(imageobject);
    console.log(props.imagelist);
  };

  console.log(imageobject);

  return (
    <div>
      <button onClick={testClick}>test</button>
      {imageobject}
    </div>
  );
};
export default ImageBrowser;
