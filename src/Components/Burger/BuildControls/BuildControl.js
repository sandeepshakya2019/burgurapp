import React from "react";

import "./BuildControl.css";
import Buildcon from "./Buildcontrol/Buildcon";

const control = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

export default function BuildControl({
  ingrAdd,
  ingrDed,
  disabled,
  price,
  ingprice,
  ingrPrice,
  updatePurchase,
  orderButton,
}) {
  // console.log(purchase);
  return (
    <>
      <div className="BuildControl1">
        <p>Current Price = ₹ {price} </p>
        {control.map((ctrl) => (
          <Buildcon
            ingprice={ingprice[ctrl.type]}
            key={ctrl.lebel}
            ingrPrice={ingrPrice[ctrl.type]}
            added={() => ingrAdd(ctrl.type)}
            deducted={() => ingrDed(ctrl.type)}
            disabled={disabled[ctrl.type]}
            label={ctrl.label}
          />
        ))}
        <br />
        <button
          className="OrderButton"
          disabled={!updatePurchase}
          onClick={() => orderButton()}
        >
          Place Order
        </button>
      </div>
    </>
  );
}
