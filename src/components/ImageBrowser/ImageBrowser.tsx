import React, { useState, useEffect } from "react";

import arrow from "../../assets/images/imagebrowser/arrow.png";
import "./ImageBrowser.css";

interface Props {
  imageURLs: string[];
}

const ImageBrowser: React.FC<Props> = props => {
  const [imageShown, setImageShown] = useState(0);
  const [carouselHalted, setCarouselHalted] = useState(true);

  const imageList = props.imageURLs.map((image: string, index: number) => (
    <img className="carouselImage" key={index} src={image} />
  ));

  const previousImage = (imageShown: number) => {
    let newImageIndex: number = 0;
    setImageShown(
      imageShown === 0 ? (newImageIndex = imageList.length - 1) : (newImageIndex = imageShown - 1)
    );
  };

  const nextImage = (imageShown: number) => {
    let newImageIndex: number = 0;
    setImageShown(
      imageShown === imageList.length - 1 ? (newImageIndex = 0) : (newImageIndex = imageShown + 1)
    );
  };

  useEffect(() => {
    if (carouselHalted) {
      const interval = setInterval(() => {
        setCarouselHalted(false);
      }, 2000);
      return () => clearInterval(interval);
    }

    const interval = setInterval(() => {
      nextImage(imageShown);
    }, 4000);
    return () => clearInterval(interval);
  }, [imageShown, carouselHalted]);

  return (
    <div>
      <div className="imageCarousel">
        <img
          className="controlButtonPrevious"
          src={arrow}
          onClick={() => {
            previousImage(imageShown);
            setCarouselHalted(true);
          }}
        />
        <div className="imageWrapper">{imageList[imageShown]}</div>
        <img
          className="controlButtonNext"
          src={arrow}
          onClick={() => {
            nextImage(imageShown);
            setCarouselHalted(true);
          }}
        />
      </div>
    </div>
  );
};
export default ImageBrowser;
