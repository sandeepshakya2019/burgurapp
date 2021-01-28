import React from "react";
import "./Logo.css";
import logo from "../../Assets/Images/burger-logo.png";

function Logo({ height }) {
  // console.log(height);
  return (
    <div className="Logo" style={{ height: height }}>
      <img src={logo} alt="log_burger" />
    </div>
  );
}

export default Logo;
