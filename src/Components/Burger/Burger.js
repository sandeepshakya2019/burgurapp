import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
// import { browserHistory } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Burger({ ingredients }) {
  // console.log(ingredients);
  // ingredients = [...ingredients];
  // console.log(ingredients);
  const history = useHistory();

  // useEffect(() => {
  //   if (!ingredients) {
  //     console.log("no");
  //     history.push("/");
  //   } else {
  //     console.log("fale");
  //   }
  // }, []);

  if (ingredients) {
    var transformedIngredient = Object.keys(ingredients)
      .map((igkey) => {
        return [...Array(ingredients[igkey])].map((_, i) => {
          return <BurgerIngredient key={igkey + i} type={igkey} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);

    if (transformedIngredient.length === 0) {
      transformedIngredient = <p>Please Start Adding the Ingredients</p>;
    }
  } else {
    const goLogin = () => history.push("login");
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default Burger;
