import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return { type: actionTypes.AUTH_START };
};
export const authSuccess = (token, userId, email) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
    email: email,
  };
};

export const authFail = (err) => {
  return { type: actionTypes.AUTH_FAIL, error: err };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  localStorage.removeItem("email");

  return {
    type: actionTypes.LOGOUT,
  };
};
export const checkAuthTimeOut = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};
export const auth = (email, password, reg) => {
  return (dispatch) => {
    dispatch(authStart());
    let url = null;
    let loginurl =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEhB3rmsSQ0ehD5gR8aUon23szPw9m9hw";
    let regurl =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBEhB3rmsSQ0ehD5gR8aUon23szPw9m9hw";
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    // console;
    if (reg === "login") {
      url = loginurl;
    } else if (reg === "reg") {
      url = regurl;
    }
    axios
      .post(url, authData)
      .then((res) => {
        // console.log(res);
        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 1000
        );
        // console.log(res.data);
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", res.data.localId);
        localStorage.setItem("email", res.data.email);

        dispatch(
          authSuccess(res.data.idToken, res.data.localId, res.data.email)
        );
        dispatch(checkAuthTimeOut(res.data.expiresIn));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const authCheckLocal = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate < new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        const email = localStorage.getItem("email");

        dispatch(authSuccess(token, userId, email));
        dispatch(
          checkAuthTimeOut(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
