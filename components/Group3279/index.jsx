import React from "react";
import Scale from "../Scale";
import "./Group3279.css";

function Group3279(props) {
  const { scaleProps } = props;

  return (
    <div className="group-3279">
      <img
        className="rectangle-3276"
        src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-3276@1x.png"
      />
      <div className="flex-col-4">
        <div className="kiwi helveticaneue-regular-normal-star-dust-20px">Kiwi</div>
        <Scale className={scaleProps.className} profileProps={scaleProps.profileProps} />
      </div>
    </div>
  );
}

export default Group3279;
