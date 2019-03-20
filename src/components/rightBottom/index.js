import React, { Component } from "react";
import "./rightbottom.css";

class Rightbottom extends Component {
  state = {};
  render() {
    return (
      <div className="widget" id="micEnhance">
        <div className="help" />
        <div className="tip">
          I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a
          tooltip. I'm just a tooltip.
        </div>
        <div className="title">enhancements</div>

        <div className="check-item">
          <input type="checkbox" id="checkNorm" />
          <label htmlFor="checkNorm" className="check-box">
            <div className="check-text">Volume Normalization</div>
          </label>
        </div>
        <div className="slider-container" id="slNorm">
          <div className="foot min">low</div>
          <div className="foot mid">medium</div>
          <div className="foot max">high</div>
          <div className="track" />

          <input
            type="range"
            min="10"
            max="100"
            defaultValue="50"
            step="1"
            className="slider"
            id="slNormRange"
          />
        </div>

        <div className="check-item">
          <input type="checkbox" id="checkAmb" />
          <label htmlFor="checkAmb" className="check-box">
            <div className="check-text">Ambient Noise Reduction</div>
          </label>
        </div>
        <div className="slider-container" id="slAmb">
          <div className="foot min">low</div>
          <div className="foot mid">medium</div>
          <div className="foot max">high</div>
          <div className="track" />

          <input
            type="range"
            min="10"
            max="100"
            defaultValue="50"
            step="1"
            className="slider"
            id="slAmbRange"
          />
        </div>

        <div className="check-item">
          <input type="checkbox" id="checkClarity" />
          <label htmlFor="checkClarity" className="check-box">
            <div className="check-text">Voice Clarity</div>
          </label>
        </div>
        <div className="slider-container" id="slClarity">
          <div className="foot min">low</div>
          <div className="foot mid">medium</div>
          <div className="foot max">high</div>
          <div className="track" />

          <input
            type="range"
            min="10"
            max="100"
            defaultValue="50"
            step="1"
            className="slider"
            id="slClarityRange"
          />
        </div>
      </div>
    );
  }
}

export default Rightbottom;
