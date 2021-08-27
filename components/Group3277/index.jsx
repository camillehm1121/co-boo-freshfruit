import React from "react";
import Scale from "../Scale";
import "./Group3277.css";

function Group3277(props) {
  const { scaleProps } = props;

  return (
    <div className="group-3277">
      <img
        className="rectangle-3274"
        src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-3274@1x.png"
      />
      <div className="flex-col-2">
        <div className="grapes helveticaneue-regular-normal-star-dust-20px">Grapes</div>
        <Scale className={scaleProps.className} profileProps={scaleProps.profileProps} />
      </div>
    </div>
  );
}

export default Group3277;
