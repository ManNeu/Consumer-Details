import React, { useReducer } from "react";

import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

//defining initial state

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };
  //dispatching object to the useReducer()
  const [state, dispatch] = useReducer(authReducer, initialState);

  //load user

  //register user

  //login user

  //logout

  //clear errors

  //returning context provider such that we can wrap our apps with it
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.token,
        loading: state.loading,
        user: state.user,
        error: state.error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
