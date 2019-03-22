import React from "react";
import "./slider.css";

const Slider = props => {
  return (
    <div className={`slider-container ${props.disabled ? "on" : ""}`}>
      <div className="foot min">low</div>
      <div className="foot mid">medium</div>
      <div className="foot max">high</div>
      <div className="left" />
      <div className="track" />
      <div className="slider-tip">{props.value}</div>
      <input
        type="range"
        min="10"
        max="100"
        value={props.value}
        onChange={props.onChange}
        step="1"
        className="slider"
        id={props.id}
      />
    </div>
  );
};

export default Slider;
