import React from "react";
// import Button from "../../UI/Button/Button";
import "./OrderSummary.css";

function OrderSummary({ ingredients, cancelButton, price, purchaseButton }) {
  // console.log("Chjjk");
  return (
    <div>
      <h3>Your Order</h3>
      <br />
      <p> A Delicious Burger With the Following Ingredients</p>

      <ul className="ulList">
        {Object.keys(ingredients).map((item) => {
          return (
            <li className="listIngredients" key={item}>
              <b>{item.slice(0, 1)[0].toUpperCase() + item.slice(1)}</b> :
              {ingredients[item]}
            </li>
          );
        })}
      </ul>

      <br />
      <p style={{ float: "left " }}>
        Burger Price : <b>₹{price} </b>
        <br />
        Tax : <b>₹{20} </b>
        <br />
        Delivery Charges : <b>₹{20} </b>
      </p>
      <p style={{ float: "right " }}>
        Total Price : <b>₹{price + 20 + 20} </b>
      </p>

      <br />
      <br />
      <br />
      <br />
      <p>Continue to Checkout ?</p>
      <br />

      <button
        className="checkout Button Danger"
        onClick={() => purchaseButton()}
      >
        CHECKOUT
      </button>
      <button className="Button Success cancel" onClick={() => cancelButton()}>
        CANCEL
      </button>
    </div>
  );
}

export default React.memo(OrderSummary);
