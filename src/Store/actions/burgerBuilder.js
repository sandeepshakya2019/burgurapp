import * as actionTypes from "./actionTypes";
import axios from "../../axios-order";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName: name,
  };
};
export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};
export const initfetchIngredients = () => {
  return (dispatch) => {
    axios
      .get(
        "https://burger-project-a9c8b-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((res) => {
        // setIngredients(res.data);
        dispatch(setIngredients(res.data));
      })
      .catch((err) => alert(err.message));
  };
};
