import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

//defining initial state

const AlertState = (props) => {
  const initialState = [];
  //dispatching object to the useReducer()
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //set alert
  const setAlert = (msg, type, timeout = 2000) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      timeout
    );
  };

  //returning context provider such that we can wrap our apps with it
  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
