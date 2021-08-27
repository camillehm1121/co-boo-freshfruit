import React from "react";
import "./Profile.css";

function Profile(props) {
  const { src } = props;

  return <div className="profile" style={{ backgroundImage: `url(${src})` }}></div>;
}

export default Profile;
