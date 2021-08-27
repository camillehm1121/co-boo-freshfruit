import React from "react";
import Scale from "../Scale";
import "./Group3276.css";

function Group3276(props) {
  const { cranberries, rectangle3273, className, scaleProps } = props;

  return (
    <div className={`group-32-1 ${className || ""}`}>
      <div className="overlap-group-2">
        <div className="group-322">
          <div className="cranberries helveticaneue-regular-normal-star-dust-20px">{cranberries}</div>
          <Scale className={scaleProps.className} profileProps={scaleProps.profileProps} />
        </div>
        <img className="rectangle-32" src={rectangle3273} />
      </div>
    </div>
  );
}

export default Group3276;
