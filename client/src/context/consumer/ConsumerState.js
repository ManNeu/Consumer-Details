import React, { useReducer } from "react";
import axios from "axios";
import ConsumerContext from "./consumerContext";
import consumerReducer from "./consumerReducer";
import {
  ADD_CONSUMER,
  DELETE_CONSUMER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONSUMER,
  FILTER_CONSUMERS,
  CLEAR_FILTER,
  CONSUMER_ERROR,
} from "../types";

//defining initial state

const ConsumerState = (props) => {
  const initialState = {
    consumers: [],

    current: null,
    filtered: null,
    error: null,
  };
  //dispatching object to the useReducer()
  const [state, dispatch] = useReducer(consumerReducer, initialState);

  //Add consumer
  const addConsumer = async (consumer) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/consumers", consumer, config);
      dispatch({ type: ADD_CONSUMER, payload: res.data });
    } catch (err) {
      dispatch({
        type: CONSUMER_ERROR,
        payload: err.response.msg,
      });
    }
  };
  //Delete consumer
  const deleteConsumer = (_id) => {
    dispatch({ type: DELETE_CONSUMER, payload: _id });
  };
  // set current consumer
  const setCurrent = (consumer) => {
    dispatch({ type: SET_CURRENT, payload: consumer });
  };
  //clear current consumer
  const clearCurrent = (consumer) => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //Update Consumer
  const updateConsumer = (consumer) => {
    dispatch({ type: UPDATE_CONSUMER, payload: consumer });
  };
  //filter consumers

  const filterConsumers = (text) => {
    dispatch({ type: FILTER_CONSUMERS, payload: text });
  };
  //clear filter
  const clearFilter = (consumer) => {
    dispatch({ type: CLEAR_FILTER });
  };
  //returning context provider such that we can wrap our apps with it
  return (
    <ConsumerContext.Provider
      value={{
        consumers: state.consumers,
        current: state.current,
        filtered: state.filtered,
        error: state.error,

        addConsumer,
        deleteConsumer,
        setCurrent,
        clearCurrent,
        updateConsumer,
        filterConsumers,
        clearFilter,
      }}
    >
      {props.children}
    </ConsumerContext.Provider>
  );
};
export default ConsumerState;
