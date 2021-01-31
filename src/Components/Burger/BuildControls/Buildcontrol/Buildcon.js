import React from "react";
import "./Buildcon.css";
export default function Buildcon({
  label,
  added,
  deducted,
  disabled,
  ingprice,
  ingrPrice,
}) {
  // console.log(ingprice);
  return (
    <div className="BuildControl">
      <div className="Label">{` ${label}`}</div>
      {/* <div className="Label">{ingrPrice === 0 ?: `₹ ${ingrPrice}:`₹ ${ingrPrice}`}</div> */}
      {/* <div className="Label">`₹ ${ingrPrice}`</div> */}

      <button className="Less" onClick={deducted} disabled={disabled}>
        Less
      </button>
      <button className="More" onClick={added}>
        More
      </button>
    </div>
  );
}
