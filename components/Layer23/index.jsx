import React from "react";
import "./Layer23.css";

function Layer23(props) {
  const { src } = props;

  return (
    <div className="layer-2">
      <div className="overlap-group1-1">
        <div className="invisible-box"></div>
        <div className="q3-icons" style={{ backgroundImage: `url(${src})` }}></div>
      </div>
    </div>
  );
}

export default Layer23;
