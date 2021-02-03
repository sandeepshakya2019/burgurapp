import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  email: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { ...state, error: null, loading: true };

    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        error: null,
        loading: null,
        token: action.idToken,
        userId: action.userId,
        email: action.email,
      };

    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: null,
        token: null,
        userId: null,
        email: null,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        error: null,
        loading: null,
        token: null,
        userId: null,
        email: null,
      };
    default:
      return state;
  }
};

export default reducer;
