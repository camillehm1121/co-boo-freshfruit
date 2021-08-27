import React from "react";
import "./Iconadd.css";

function Iconadd(props) {
  const { src } = props;

  return <div className="iconadd" style={{ backgroundImage: `url(${src})` }}></div>;
}

export default Iconadd;
