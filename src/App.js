import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Containers/Checkout/Checkout";
import { Route, Switch, withRouter } from "react-router-dom";
import ContactData from "./Containers/Checkout/ContactData/ContactData";
import Orders from "./Containers/Orders/Orders";
import Auth from "./Containers/Auth/Auth";
import Register from "./Containers/Auth/Register";
import Logout from "./Containers/Auth/Logout";
// import { connect } from "react-redux";
import * as actions from "./Store/actions/index";

function App(props) {
  useEffect(() => {
    // console.log(props);
    props.onAutoSignUp();
  }, [props.onAutoSignUp]);

  return (
    <div className="App">
      <Layout>
        <center>
          <h6>This is only for testing purpose</h6>
        </center>
        <Switch>
          <Route path="/login" component={Auth} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={BurgerBuilder} />

          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/checkout/contact-data" component={ContactData} />
          <Route exact path="/orders" component={Orders} />

          <Route exact path="/logout" component={Logout} />
          <Route component={Auth} />
        </Switch>
      </Layout>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAutoSignUp: () => dispatch(actions.authCheckLocal()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
