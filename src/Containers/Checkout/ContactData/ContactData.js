import React, { useState, useEffect } from "react";
import axios from "../../../axios-order";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
function ContactData(props) {
  // const [datafectch, setdatafectch] = useState({
  //   ingredients: "",
  //   price: props.location.state.total + 20 + 20,
  //   name: "",
  //   Address: "",
  //   Country: "",
  //   email: "",
  //   pincode: "",
  //   deliveryMethod: "",
  // });
  // useEffect(() => {
  //   console.log(props);
  // }, []);

  useEffect(() => {
    // console.log(props.email);
    if (!props.ings) {
      props.history.push("/");
    } else {
      let add = 0;
      Object.values(props.ings).map((el) => (add = add + el));
      // console.log(add);
      if (add <= 0) {
        // console.log("d");
        props.history.push("/");
      }
    }
  }, []);
  const [loading, setLoading] = useState(false);
  const [pro, setpro] = useState("");
  const [name, setName] = useState("");
  const [email, setemail] = useState(props.email);
  const [address, setaddress] = useState("");
  const [country, setcountry] = useState("");
  const [delivery, setdelivery] = useState("Slow");
  const [pincode, setpincode] = useState("");

  const isValidate = (e) => {
    // console.log(props);
    e.preventDefault();
    let ingredients = props.ings;
    let price = props.price + 20 + 20;
    if (
      !ingredients ||
      !price ||
      !name ||
      !address ||
      !country ||
      !email ||
      !pincode
    ) {
      // console.log("no");
      setpro("Please Fill All the Fields");
      // return;
    } else if (email) {
      let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let san = pattern.test(email);
      // console.log(san);
      if (san === false) {
        setpro("Email is not Correct");
      } else {
        let count = Number(country);
        // console.log(count);
        if (count !== "NaN") {
          let post = Number(pincode);
          if (
            typeof price === "number" &&
            price === props.price + 20 + 20 &&
            post !== "NaN"
          ) {
            if (email === props.email) {
              orderHandler();
            } else {
              setpro("EmailId changed");
            }
            // alert("orderPlaced");
          } else {
            setpro("Should Be in Number");
          }
        } else {
          alert("Not");
          setpro("Country Should be in String");
        }
      }
    }
  };

  const orderHandler = () => {
    // e.preventDefault();
    // console.log(delivery);
    let ingredients = props.ings;
    let price = props.price + 20 + 20;

    setLoading(true);

    const order = {
      ingredients: ingredients,
      price: price,
      customer: {
        name: name,
        Address: address,
        Country: country,
        email: email,
        pincode: pincode,
        userId: props.userId,
      },
      deliveryMethod: delivery,
    };
    // isValidate();
    // Make the validation before storing at the server
    axios
      .post("/orders.json?auth=" + props.token, order)
      .then((res) => {
        // console.log(res);
        setLoading(false);
        // setOrderButton(false);
        // alert("Order Placed");
        alert("Order Placed");
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
  let p = null;
  if (pro) {
    p = pro;
  }
  let redirect = null;
  if (!props.token) {
    redirect = <Redirect to="/login" />;
  }
  return (
    <div className="container">
      {redirect}
      <div className="ds" style={{ color: "red" }}>
        {p}
      </div>
      <form onSubmit={isValidate}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
          />
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
        <div className="row">
          <div className="mb-3 col">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              value={country}
              onChange={(e) => setcountry(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 col">
            <label htmlFor="postal" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              className="form-control"
              id="postal"
              value={pincode}
              onChange={(e) => setpincode(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="select">Delivery Method</label>
          <select
            className="form-control"
            id="select"
            onClick={(e) => setdelivery(e.target.value)}
          >
            <option value="Slow">Slow Delivery</option>
            <option value="Fast">Fast Delivery (Cost a Extra Charge)</option>
          </select>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Order
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.total,
    token: state.auth.token,
    email: state.auth.email,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(ContactData);
