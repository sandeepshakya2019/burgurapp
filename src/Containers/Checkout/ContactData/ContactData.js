import React, { useState } from "react";
import axios from "../../../axios-order";
import Spinner from "../../../Components/UI/Spinner/Spinner";

function ContactData(props) {
  //   const [datafectch, setdatafectch] = useState({
  //     name: "",
  //     email: "",
  //     address: { street: "", postalcode: "" },
  //   });
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [pincode, setpincode] = useState("");

  const orderHandler = (e) => {
    e.preventDefault();
    let ingredients = props.location.state.ingredient;
    // console.log(name, email, address, pincode);
    // alert("Countinue !!!");
    setLoading(true);
    // setOrderButton(false);
    const order = {
      ingredients: ingredients,
      price: props.location.state.total + 20 + 20,
      customer: {
        name: name,
        Address: address,
        email: email,
        pincode: pincode,
        deliveryMethod: "fast",
      },
    };
    axios
      .post("/orders.json", order)
      .then((res) => {
        // console.log(res);
        setLoading(false);
        // setOrderButton(false);
        // alert("Order Placed");
        props.history.push("/");
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="container">
      <form onSubmit={orderHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postal" className="form-label">
            Postal Code
          </label>
          <input
            type="number"
            className="form-control"
            id="postal"
            value={pincode}
            onChange={(e) => setpincode(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Order
        </button>
      </form>
    </div>
  );
}

export default ContactData;
