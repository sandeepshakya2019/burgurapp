import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: null,
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
    case actionTypes.SET_INGREDIENTS:
      return { ...state, ingredients: action.ingredients, total: 20 };

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
