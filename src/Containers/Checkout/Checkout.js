import React, { useState, useEffect } from "react";
import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";

function Checkout(props) {
  //   console.log(props.location.state.total);
  const [ingr, setingr] = useState({});
  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    setingr(ingredients);
  }, []);
  const checkoutcancelHandler = () => {
    props.history.push("/");
  };
  const checkoutcontinueHandler = () => {
    // props.history.replace("/checkout/contact-data");
    props.history.replace({
      pathname: "/checkout/contact-data",
      state: { ingredient: ingr, total: props.location.state.total },
    });
  };

  return (
    <div>
      <CheckoutSummary
        ingredients={ingr}
        checkoutcancel={checkoutcancelHandler}
        checkoutContinue={checkoutcontinueHandler}
      />
    </div>
  );
}

export default Checkout;
