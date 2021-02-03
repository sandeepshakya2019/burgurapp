import React, { useState } from "react";
import * as action from "../../Store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { Redirect } from "react-router-dom";

function Register(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [prob, setProb] = useState("");

  const checkValidity = (e) => {
    e.preventDefault();
    // console.log(email, pass);
    if (!email || !pass) {
      setProb("Please fill all the fields");
    } else {
      if (email) {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let san = pattern.test(email);
        // console.log(san);
        if (san === false) {
          setProb("Email is not Correct");
        } else {
          if (pass.length > 5) {
            setProb("");
            signsubmit();
          } else {
            setProb("Pass should be greater than 6 char");
          }
        }
      }
    }
  };
  const signsubmit = () => {
    props.onAuth(email, pass, "reg");
  };
  let p = null;
  //   console.log(prob);
  if (prob) {
    p = prob;
  }
  const regdirect = () => {
    props.history.push("/login");
  };
  if (props.loading) {
    return <Spinner />;
  }
  if (props.error) {
    p = props.error.message;
    // console.log(p);
  }

  let redirect = null;
  if (props.isAuth) {
    redirect = <Redirect to="/" />;
  }
  return (
    <div className="container">
      {redirect}
      <h1>Register to Burger WebApp</h1>
      <br />

      <div className="ds" style={{ color: "red" }}>
        {/* {console.log(p)} */}
        {p}
      </div>
      <br />
      <form onSubmit={checkValidity}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            // required
          />
        </div>
        <br />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
      <br />
      <p>
        Already Registered ?
        <span onClick={regdirect} style={{ cursor: "pointer", color: "green" }}>
          Click to Login
        </span>
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
    loading: state.auth.loading,
    error: state.auth.error,
  };
};

const mapsdispatchToprops = (dispatch) => {
  return {
    onAuth: (email, password, reg) =>
      dispatch(action.auth(email, password, reg)),
  };
};
export default connect(mapStateToProps, mapsdispatchToprops)(Register);
