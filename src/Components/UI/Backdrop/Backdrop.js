import React from "react";
import "./Backdrop.css";
function Backdrop({ show, cancelButton }) {
  return show ? (
    <div className="Backdrop" onClick={() => cancelButton()}></div>
  ) : null;
}

export default Backdrop;
