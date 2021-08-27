import React from "react";
import IconArrowSmall from "../IconArrowSmall";
import "./Button.css";

function Button() {
  return (
    <div className="button">
      <IconArrowSmall />
      <div className="continue">CONTINUE</div>
    </div>
  );
}

export default Button;
