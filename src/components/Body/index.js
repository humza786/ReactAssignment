import React, { Component } from "react";
import "./leftbody.css";
import Topbar from "../topBar";
import Toggle from "../toggleButton";
import Slider from "../slider";
import Dropbox from "../dropBox";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      micToggle: true,
      msToggle: true,
      sideTone: true,
      show1: false,
      show2: false,
      show3: false,
      cid1: "checkNorm",
      cid2: "checkAmb",
      cid3: "checkClarity",
      title1: "Volume Normalization",
      title2: "Ambient Noise Reduction",
      title3: "Voice Clarity",
      sid1: "slNormRange",
      sid2: "slAmbRange",
      sid3: "slClarityRange",
      value: "50"
    };
    this.handleMicToggle = this.handleMicToggle.bind(this);
    this.handleMsToggle = this.handleMsToggle.bind(this);
    this.handleSideTone = this.handleSideTone.bind(this);
    this.handleNorm = this.handleNorm.bind(this);
    this.handleAmb = this.handleAmb.bind(this);
    this.handleClarity = this.handleClarity.bind(this);
    this.handleMicSlider = this.handleMicSlider.bind(this);
  }

  handleMicToggle = () => {
    const { micToggle } = this.state;
    this.setState({ micToggle: !micToggle });
  };
  handleMsToggle = () => {
    const { msToggle } = this.state;
    this.setState({ msToggle: !msToggle });
  };
  handleSideTone = () => {
    const { sideTone } = this.state;
    this.setState({ sideTone: !sideTone });
  };
  handleNorm = () => {
    const { show1 } = this.state;
    this.setState({ show1: !show1 });
  };
  handleAmb = () => {
    const { show2 } = this.state;
    this.setState({ show2: !show2 });
  };
  handleClarity = () => {
    const { show3 } = this.state;
    this.setState({ show3: !show3 });
  };
  handleMicSlider = e => {
    console.log("e ", e.target.value);
    this.setState({ value: e.target.value });
  };

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
                <Toggle
                  handletoggle={this.handleMicToggle}
                  checked={this.state.micToggle}
                />
              </div>

              <div className="h2-title">mic volume</div>
              <Slider
                value={this.state.value}
                onChange={this.handleMicSlider}
                disabled={this.state.micToggle}
              />

              <div className="h2-title mt20">
                mic sensitivity
                <Toggle
                  handletoggle={this.handleMsToggle}
                  checked={this.state.msToggle}
                />
              </div>
              <div className="h2-body">
                Adjust this setting to remove unwanted background noise or
                increase the amount of mic output heard
              </div>
              <Slider disabled={this.state.msToggle} />
            </div>
          </div>

          <div className="widget-col flex">
            <div className="widget" id="micSidetone">
              <div className="help" />
              <div className="tip">
                I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm
                just a tooltip. I'm just a tooltip.
              </div>
              <div className="title">
                sidetone
                <Toggle
                  handletoggle={this.handleSideTone}
                  checked={this.state.sideTone}
                />
              </div>
              <Slider disabled={this.state.sideTone} />
            </div>
            <div className="widget" id="micEnhance">
              <div className="help" />
              <div className="tip">
                I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm
                just a tooltip. I'm just a tooltip.
              </div>
              <div className="title">enhancements</div>

              <Dropbox
                handleDropBox={this.handleNorm}
                checked={this.state.show1}
                id={this.state.cid1}
                title={this.state.title1}
              />
              {this.state.show1 && (
                <Slider disabled={this.state.show1} id={this.state.sid1} />
              )}

              <Dropbox
                handleDropBox={this.handleAmb}
                checked={this.state.show2}
                id={this.state.cid2}
                title={this.state.title2}
              />
              {this.state.show2 && (
                <Slider disabled={this.state.show2} id={this.state.sid2} />
              )}

              <Dropbox
                handleDropBox={this.handleClarity}
                checked={this.state.show3}
                id={this.state.cid3}
                title={this.state.title3}
              />
              {this.state.show3 && (
                <Slider disabled={this.state.show3} id={this.state.sid3} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
