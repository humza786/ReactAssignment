import React, { Component } from "react";
import "./topbar.css";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleprofile = () => {};

  render() {
    return (
      <div className="profile-bar flex">
        <div className="loader" tooltip="Syncing Profiles" />
        <div>profile</div>

        <input type="text" name="profile" id="profileEdit" maxLength="25" />

        <div onClick={this.handleprofile} className="dropdown-area">
          <div id="profileDrop" className="s3-dropdown">
            <div className="selected">profile 5</div>
            <div className="icon expand" />
          </div>
          <div id="profileDropOpt" className="s3-options flex">
            <div className="option">default profile</div>
            <div className="option">profile 2</div>
            <div className="option">profile 3</div>
            <div className="option">profile 4</div>
            <div className="option selected">profile 5</div>
            <div className="option">profile 6</div>
            <div className="option">profile 7</div>
            <div className="option">profile 8</div>
          </div>
        </div>

        <div className="dots3 hover-border" id="profileMenuToggle">
          <div className="profile-act" id="profileMenu">
            <div className="act action">add</div>
            <div className="act action">import</div>
            <div className="act divider" />
            <div className="act action">rename</div>
            <div className="act action">duplicate</div>
            <div className="act action">export</div>
            <div className="act divider" />
            <div className="act action" id="deleteAction">
              delete
            </div>
          </div>
        </div>

        <div id="deleteAlert" className="flex alert profile-del">
          <div className="title">delete profile</div>
          <div className="body-text t-center">
            You're about to delete this profile. All bindings in this profile
            will be deleted.
          </div>
          <div className="thx-btn" id="deleteConfirm">
            delete
          </div>
        </div>
        <div className="obm hover-border" tooltip="On-board Profiles" />
        <div className="divider" />
        <div className="batt batt-30" tooltip="30% Battery" />
      </div>
    );
  }
}

export default Topbar;
