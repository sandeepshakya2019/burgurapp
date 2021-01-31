//jshint esversion:6

const redux = require("redux");
const createStore = redux.createStore;

// Initital State

const initialState = {
  counter: 0,
};

// Reducers

const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNT") {
    return { ...state, counter: state.counter + 1 };
  }
  if (action.type === "ADD_COUNT") {
    return { ...state, counter: state.counter + action.value };
  }
  return state;
};

// Store

const store = createStore(rootReducer);
console.log(store.getState());

// Subscrition

store.subscribe(() => {
  console.log("su", store.getState());
});

// Dispatching Function

store.dispatch({ type: "INC_COUNT" });
store.dispatch({ type: "ADD_COUNT", value: 10 });
console.log(store.getState());
