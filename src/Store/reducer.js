import * as actionTypes from "./action";

const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  },
  total: 20,
};

const INGREDIENT_PRICE = { salad: 10, cheese: 20, meat: 50, bacon: 70 };

const reducer = (state = initialState, action) => {
  //   console.log(state);
  //   console.log(actionTypes.ADD_INGREDIENTS);
  // console.log()
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        total: state.total + INGREDIENT_PRICE[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        total: state.total - INGREDIENT_PRICE[action.ingredientName],
      };
    default:
      return state;
  }
};

export default reducer;
