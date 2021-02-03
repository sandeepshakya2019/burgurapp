import React, { useEffect } from "react";
import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
import { connect } from "react-redux";
function Checkout(props) {
  // console.log(props.ings);
  useEffect(() => {
    let add = 0;
    Object.values(props.ings).map((el) => (add = add + el));
    // console.log(add);
    if (add <= 0) {
      // console.log("d");
      props.history.push("/");
    }
  }, [props.ings, props.history]);
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

  return (
    <div>
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
    ings: state.ingredients,
  };
};

export default connect(mapStateToProps)(Checkout);
