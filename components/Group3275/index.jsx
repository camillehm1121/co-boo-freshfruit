import React from "react";
import Scale from "../Scale";
import "./Group3275.css";

function Group3275(props) {
  const { scaleProps } = props;

  return (
    <div className="group-3275">
      <img
        className="rectangle-3272"
        src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-3272@1x.png"
      />
      <div className="flex-col-1">
        <div className="cherries helveticaneue-regular-normal-star-dust-20px">Cherries</div>
        <Scale className={scaleProps.className} profileProps={scaleProps.profileProps} />
      </div>
    </div>
  );
}

export default Group3275;
