import React from "react";
import Burger from "../../Burger/Burger";
import "./CheckoutSummary.css";
function CheckoutSummary(props) {
  return (
    <div className="CheckoutSummary">
      <h1>We hope it tests well !!!</h1>
      <br />
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>

      <button className="btn btn-danger btn1" onClick={props.checkoutcancel}>
        Cancel
      </button>
      <button className="btn btn-success btn1" onClick={props.checkoutContinue}>
        Continue
      </button>
    </div>
  );
}

export default CheckoutSummary;
