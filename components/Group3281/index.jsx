import React from "react";
import Scale from "../Scale";
import "./Group3281.css";

function Group3281(props) {
  const { scaleProps } = props;

  return (
    <div className="group-3281">
      <img
        className="rectangle-2323-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-2323-1@1x.png"
      />
      <div className="group-2687">
        <div className="avocado helveticaneue-regular-normal-star-dust-20px">Avocado</div>
        <Scale profileProps={scaleProps.profileProps} />
      </div>
    </div>
  );
}

export default Group3281;
