import React, { useState, useEffect } from "react";

import arrow from "../../assets/images/imagebrowser/arrow.png";
import "./ImageBrowser.scss";

interface Props {
  imageURLs: string[];
}

const ImageBrowser: React.FC<Props> = props => {
  const [imageShown, setImageShown] = useState(0);
  const [carouselHalted, setCarouselHalted] = useState(true);

  const previousImage = (imageShown: number) => {
    setImageShown(imageShown === 0 ? props.imageURLs.length - 1 : imageShown - 1);
  };

  const nextImage = (imageShown: number) => {
    setImageShown(imageShown === props.imageURLs.length - 1 ? 0 : imageShown + 1);
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
        <div className="imageWrapper">
          <img className="carouselImage" src={props.imageURLs[imageShown]} />
        </div>
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
