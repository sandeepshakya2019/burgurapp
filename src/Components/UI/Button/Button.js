import React from "react";
import "./Button.css";

export default function Button({ nameBtn }) {
  return (
    <div>
      <button className="Button Success">{nameBtn}</button>
    </div>
  );
}
