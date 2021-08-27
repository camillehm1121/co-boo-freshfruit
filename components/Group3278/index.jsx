import React from "react";
import Scale from "../Scale";
import "./Group3278.css";

function Group3278(props) {
  const { scaleProps } = props;

  return (
    <div className="group-3278">
      <img
        className="rectangle-3275"
        src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-3275@1x.png"
      />
      <div className="flex-col-3">
        <div className="color helveticaneue-regular-normal-star-dust-20px">Honeydew</div>
        <Scale className={scaleProps.className} profileProps={scaleProps.profileProps} />
      </div>
    </div>
  );
}

export default Group3278;
