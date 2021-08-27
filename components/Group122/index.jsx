import React from "react";
import Network from "../Network";
import Battery from "../Battery";
import "./Group122.css";

function Group122(props) {
  const { className } = props;

  return (
    <div className={`group-1 ${className || ""}`}>
      <div className="wifi"></div>
      <Network />
      <Battery />
      <div className="text roboto-normal-white-13px">12:30</div>
    </div>
  );
}

export default Group122;
