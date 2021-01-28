import React, { useState } from "react";
import BuildControl from "../../Components/Burger/BuildControls/BuildControl";
import Burger from "../../Components/Burger/Burger";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Modal from "../../Components/UI/Modal/Modal";
// import axios from "../../axios-order";
import Spinner from "../../Components/UI/Spinner/Spinner";
// import withErrorHandler from "../../Components/WithErrorHandler/withErrorHandler";

const INGREDIENT_PRICE = { salad: 10, cheese: 20, meat: 50, bacon: 70 };
function BurgerBuilder(props) {
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://burger-project-a9c8b-default-rtdb.firebaseio.com/ingredients.json"
  //     )
  //     .then((res) => {
  //       setIngredients(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // });
  const [purchase, setPurchase] = useState(false);
  const [orderButton, setOrderButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState({
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  });

  const [ingPriceAdd, setIngPriceAdd] = useState({
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  });
  const [total, setTotal] = useState(20);

  const updatePurchase = () => {
    // const ingre = { ...ingredients };
    let add = 0;
    Object.values(ingredients).map((el) => (add = add + el));
    // console.log(add);
    if (add >= 0) {
      setPurchase(true);
      return true;
    } else {
      setPurchase(false);
      return false;
    }
  };
  // useEffect(() => {
  //   updatePurchase(ingredients);
  // }, [ingredients]);
  const addIngredient = (type) => {
    // console.log(ingredients[type]);
    const oldCount = ingredients[type];
    const oldIngPrice = ingPriceAdd[type];
    const updateIngPrice = oldIngPrice + INGREDIENT_PRICE[type];
    const updateIngPrice1 = { ...ingPriceAdd };
    updateIngPrice1[type] = updateIngPrice;
    const updateCount = oldCount + 1;
    const updateIngredient = { ...ingredients };
    updateIngredient[type] = updateCount;

    const preiceAddition = INGREDIENT_PRICE[type];
    const oldPrice = total;
    const newPrice = oldPrice + preiceAddition;
    // console.log(updateIngredient);
    // console.log(updateIngPrice1);
    setIngPriceAdd(updateIngPrice1);
    setIngredients(updateIngredient);
    setTotal(newPrice);
    updatePurchase();
  };

  const removeIngredient = (type) => {
    const oldCount = ingredients[type];
    if (oldCount < 1) {
      return;
    }
    const oldIngPrice = ingPriceAdd[type];
    const updateIngPrice = oldIngPrice - INGREDIENT_PRICE[type];
    const updateIngPrice1 = { ...ingPriceAdd };
    updateIngPrice1[type] = updateIngPrice;
    const updateCount = oldCount - 1;
    const updateIngredient = { ...ingredients };
    updateIngredient[type] = updateCount;

    const preiceDeduction = INGREDIENT_PRICE[type];
    const oldPrice = total;
    const newPrice = oldPrice - preiceDeduction;

    setIngPriceAdd(updateIngPrice1);
    setIngredients(updateIngredient);
    setTotal(newPrice);
    updatePurchase();
  };
  const orderButtonClicked = () => {
    setOrderButton(true);
  };
  const cancelButtonClicked = () => {
    setOrderButton(false);
  };
  const purchaseButton = () => {
    setLoading(true);
    const queryParams = [];
    for (let i in ingredients) {
      queryParams.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(ingredients[i])
      );
    }
    const queryString = queryParams.join("&");
    props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
      state: { total: total },
    });
  };
  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  let burgerLoad = <Spinner />;
  let orderSummarybyDe = null;
  if (ingredients) {
    burgerLoad = (
      <>
        <Burger ingredients={ingredients} />
        <BuildControl
          updatePurchase={purchase}
          ingprice={INGREDIENT_PRICE}
          price={total}
          ingrPrice={ingPriceAdd}
          ingrAdd={addIngredient}
          ingrDed={removeIngredient}
          disabled={disabledInfo}
          orderButton={orderButtonClicked}
        />
      </>
    );
    orderSummarybyDe = (
      <OrderSummary
        price={total}
        ingredients={ingredients}
        cancelButton={cancelButtonClicked}
        purchaseButton={purchaseButton}
      />
    );
  }
  if (loading) {
    orderSummarybyDe = <Spinner />;
  }
  return (
    <div>
      <Modal show={orderButton} cancelButton={cancelButtonClicked}>
        {orderSummarybyDe}
      </Modal>
      {burgerLoad}
    </div>
  );
}

export default BurgerBuilder;
