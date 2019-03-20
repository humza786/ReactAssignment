import React, { Component } from "react";
import "./righttop.css";
import Rightbottom from "../rightBottom";

class Righttop extends Component {
  state = {};
  render() {
    return (
      <div className="widget-col flex">
        <div className="widget" id="micSidetone">
          <div className="help" />
          <div className="tip">
            I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just
            a tooltip. I'm just a tooltip.
          </div>
          <div className="title">
            sidetone
            <div className="switch switch-slider" id="swSide">
              <div className="handle" />
            </div>
          </div>
          <div className="slider-container" id="slSide">
            <div className="foot min">0</div>
            <div className="foot mid">medium</div>
            <div className="foot max">100</div>
            <div className="track" />

            <input
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              step="1"
              className="slider"
              id="slSideRange"
            />
          </div>
        </div>
        <Rightbottom />
      </div>
    );
  }
}

export default Righttop;
