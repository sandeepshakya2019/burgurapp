import React from "react";
import "./DraweToggle.css";

function DrawerToggle(props) {
  return (
    <div
      className="DrawerToggle"
      onClick={() => {
        props.clicked();
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default DrawerToggle;
