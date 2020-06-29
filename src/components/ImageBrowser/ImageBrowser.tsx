import React from "react";
import "regenerator-runtime/runtime";

interface imageProps {
  imageURLs: string[];
}

const ImageBrowser: React.FC<imageProps> = (props: imageProps) => {
  return (
    <div>
      {props.imageURLs.map((image: string, index: number) => (
        <div key={index}>
          <img width="100%" height="100%" src={image} alt="" />
        </div>
      ))}
    </div>
  );
};
export default ImageBrowser;
