import React, { Component } from "react";
import "./leftbody.css";
import Topbar from "../topBar";
import Righttop from "../rightTop";

class Leftbody extends Component {
  state = {};
  render() {
    return (
      <div className="body-wrapper scrollable">
        <Topbar />
        <div className="body-widgets flex">
          <div className="widget-col flex">
            <div className="widget" id="micPhone">
              <div className="help" />
              <div className="tip">
                I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm
                just a tooltip. I'm just a tooltip.
              </div>

              <div className="title">
                microphone
                <div className="switch on switch-slider" id="swPhone">
                  <div className="handle" />
                </div>
              </div>

              <div className="h2-title">mic volume</div>
              <div className="slider-container" id="slPhone">
                <div className="foot min">low</div>
                <div className="foot mid">medium</div>
                <div className="foot max">high</div>
                <div className="track" />
                <input
                  type="range"
                  min="10"
                  max="100"
                  defaultValue="55"
                  step="1"
                  className="slider"
                  id="slPhoneRange"
                />
              </div>

              <div className="h2-title mt20">
                mic sensitivity
                <div className="switch on switch-slider" id="swSensi">
                  <div className="handle" />
                </div>
              </div>
              <div className="h2-body">
                Adjust this setting to remove unwanted background noise or
                increase the amount of mic output heard
              </div>
              <div className="slider-container" id="slSensi">
                <div className="foot min">low</div>
                <div className="foot mid">medium</div>
                <div className="foot max">high</div>
                <div className="track" />

                <input
                  type="range"
                  min="10"
                  max="100"
                  defaultValue="55"
                  step="1"
                  className="slider"
                  id="slSensiRange"
                />
              </div>
            </div>
          </div>

          <Righttop />
        </div>
      </div>
    );
  }
}

export default Leftbody;
