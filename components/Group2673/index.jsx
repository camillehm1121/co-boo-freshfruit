import React from "react";
import Scale from "../Scale";
import "./Group2673.css";

function Group2673(props) {
  const { cirtus, scaleProps } = props;

  return (
    <div className="group-2673">
      <div className="cirtus helveticaneue-regular-normal-star-dust-20px">{cirtus}</div>
      <Scale profileProps={scaleProps.profileProps} />
    </div>
  );
}

export default Group2673;
