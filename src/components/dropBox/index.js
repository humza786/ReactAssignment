import React from "react";
import "./dropbox.css";

const Dropbox = props => {
  return (
    <div className="check-item">
      <input
        onClick={props.handleDropBox}
        className={`slider-container ${props.checked ? "on" : ""}`}
        type="checkbox"
        id={props.id}
      />
      <label htmlFor={props.id} className="check-box">
        <div className="check-text">{props.title}</div>
      </label>
    </div>
  );
};

export default Dropbox;
