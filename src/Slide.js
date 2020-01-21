import React from "react";

const Slider = props => {
  return (
    <div className="slider">
      <img src={props.images[props.currentImage]} alt="image" />
    </div>
  );
};

export default Slider;
