import React from "react";
import "./toggle.css";

const Toggle = props => {
  return (
    <div
      onClick={props.handletoggle}
      className={`switch switch-slider ${props.checked ? "on" : ""}`}
    >
      <div className="handle" />
    </div>
  );
};

export default Toggle;
