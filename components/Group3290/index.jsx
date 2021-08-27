import React from "react";
import Scale from "../Scale";
import "./Group3290.css";

function Group3290(props) {
  const { scaleProps } = props;

  return (
    <div className="group-3290">
      <div className="overlap-group12">
        <div className="group-3232">
          <div className="raspberries helveticaneue-regular-normal-star-dust-20px">Raspberries</div>
          <Scale className={scaleProps.className} profileProps={scaleProps.profileProps} />
        </div>
        <img
          className="rectangle-3283"
          src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-3283@1x.png"
        />
      </div>
    </div>
  );
}

export default Group3290;
