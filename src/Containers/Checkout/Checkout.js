import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
import { connect } from "react-redux";
function Checkout(props) {
  // console.log(props.ings);
  useEffect(() => {
    // console.log(props.isAuth);
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
  const checkoutcancelHandler = () => {
    props.history.push("/");
  };
  const checkoutcontinueHandler = () => {
    // props.history.replace("/checkout/contact-data");
    props.history.replace({
      pathname: "/checkout/contact-data",
      // state: { ingredient: props.ings, total: props.total },
    });
  };

  let redirect = null;
  if (!props.isAuth) {
    redirect = <Redirect to="/login" />;
  }
  return (
    <div>
      {redirect}
      <CheckoutSummary
        ingredients={props.ings}
        checkoutcancel={checkoutcancelHandler}
        checkoutContinue={checkoutcontinueHandler}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    isAuth: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Checkout);
