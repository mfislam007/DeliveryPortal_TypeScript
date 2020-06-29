import React, { useState, useEffect } from "react";
import arrow from "../../assets/images/imagebrowser/arrow.png";
import "./ImageBrowser.css";

interface imageProps {
  imageURLs: string[];
}

const ImageBrowser: React.FC<imageProps> = (props: imageProps) => {
  const [imageShown, setImageShown] = useState(0);
  const [carouselHalted, setCarouselHalted] = useState(true);

  const imageList = props.imageURLs.map((image: string, index: number) => (
    <img className="carouselImage" key={index} src={image} />
  ));

  const previousImage = (imageShown: number) => {
    let newImageIndex: number = 0;
    if (imageShown === 0) {
      newImageIndex = imageList.length - 1;
    } else {
      newImageIndex = imageShown - 1;
    }
    console.log("went to previous image, state now: " + newImageIndex);
    setImageShown(newImageIndex);
  };

  const nextImage = (imageShown: number) => {
    let newImageIndex: number = 0;
    if (imageShown === imageList.length - 1) {
      newImageIndex = 0;
    } else {
      newImageIndex = imageShown + 1;
    }
    console.log("went to next image, state now: " + newImageIndex);
    setImageShown(newImageIndex);
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
        {imageList[imageShown]}
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
