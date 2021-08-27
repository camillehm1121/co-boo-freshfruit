import React from "react";
import Scale from "../Scale";
import "./Group3282.css";

function Group3282(props) {
  const { scaleProps } = props;

  return (
    <div className="group-3282">
      <img
        className="rectangle-2323-2"
        src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-2323-3@1x.png"
      />
      <div className="flex-col">
        <div className="place helveticaneue-regular-normal-star-dust-20px">Banana</div>
        <Scale className={scaleProps.className} profileProps={scaleProps.profileProps} />
      </div>
    </div>
  );
}

export default Group3282;
