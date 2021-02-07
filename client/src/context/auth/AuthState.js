import React, { useReducer } from "react";
import axios from "axios";
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
  const loadUser = () => console.log("load");

  //register user

  //creating asyncronous register function
  const register = async (FormData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("api/users", FormData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  //login user

  const login = () => console.log("login");

  //logout
  const logout = () => console.log("logout");

  //clear errors
  const clearErrors = () => console.log("clear errors");

  //returning context provider such that we can wrap our apps with it
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.token,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
