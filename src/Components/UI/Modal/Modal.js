import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";
function Modal({ children, show, cancelButton }) {
  return (
    <>
      <Backdrop show={show} cancelButton={cancelButton} />
      <div
        className="Modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(-80vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Modal;
