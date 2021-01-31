import React from "react";
import Burger from "../Burger/Burger";
import "./Order.css";
function Order(props) {
  // console.log(props);
  // console.log(props.customer.name);
  const myStyle = {
    textTransform: "capitalize",
    display: "inline-block",
    margin: "0px 8px",
    border: "1px solid grey",
    padding: "5px",
  };
  return (
    <div className="Order row">
      <div className="detail col">
        <h5>Customer Details : </h5>
        <br />
        <pre>Name : {props.customer.name} </pre>
        <pre>Address : {props.customer.Address} </pre>
        <pre>Country : {props.customer.Country} </pre>
        <pre>Pin Code : {props.customer.pincode} </pre>
        <pre>Delivery Method : {props.del} </pre>
        <br />
        <h5>
          Price : <pre style={{ display: "inline" }}>{props.price}</pre>
        </h5>
        <br />
        <h5>Ingredients : </h5>
        <br />

        <pre style={myStyle}>Bacon : {props.ingredients.bacon}</pre>
        <pre style={myStyle}>Cheese : {props.ingredients.cheese}</pre>
        <pre style={myStyle}>Meat : {props.ingredients.meat}</pre>
        <pre style={myStyle}>Salad : {props.ingredients.salad}</pre>

        <br />
      </div>
      <br />
      <div className="bur col">
        <Burger ingredients={props.ingredients} />
      </div>
    </div>
  );
}

export default Order;
