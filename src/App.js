import React, { useState } from "react";
import Slider from "./Slide";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Dots from "./Dots";

import "./styles.css";

const images = [
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
];
export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leftImageHandler = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const rightImageHandler = () => {
    if (currentIndex >= images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToImageNumber = number => {
    setCurrentIndex(number);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="container">
        <Slider images={images} currentImage={currentIndex} />
        <LeftArrow left={leftImageHandler} />
        <RightArrow right={rightImageHandler} />
        <Dots
          slideCount={images}
          currentActive={currentIndex}
          goTo={goToImageNumber}
        />
      </div>
    </div>
  );
}
