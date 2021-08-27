import React from "react";
import Profile from "../Profile";
import "./Scale.css";

function Scale(props) {
  const { className, profileProps } = props;

  return (
    <div className={`scale-4 ${className || ""}`}>
      <div className="x100g helveticaneue-regular-normal-star-dust-15px">100g</div>
      <div className="x200g helveticaneue-regular-normal-star-dust-15px">200g</div>
      <div className="overlap-group2-1">
        <Profile src={profileProps.src} />
        <div className="x500g helveticaneue-regular-normal-star-dust-15px">500g</div>
      </div>
    </div>
  );
}

export default Scale;
