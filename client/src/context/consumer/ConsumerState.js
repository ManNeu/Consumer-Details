import React, { useReducer } from "react";
import axios from "axios";
import ConsumerContext from "./consumerContext";
import consumerReducer from "./consumerReducer";
import {
  GET_CONSUMERS,
  ADD_CONSUMER,
  DELETE_CONSUMER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONSUMER,
  FILTER_CONSUMERS,
  CLEAR_CONSUMERS,
  CLEAR_FILTER,
  CONSUMER_ERROR,
} from "../types";

//defining initial state

const ConsumerState = (props) => {
  const initialState = {
    consumers: null,

    current: null,
    filtered: null,
    error: null,
  };
  //dispatching object to the useReducer()
  const [state, dispatch] = useReducer(consumerReducer, initialState);

  //Get Consumers
  const getConsumers = async () => {
    try {
      const res = await axios.get("/api/consumers");
      dispatch({
        type: GET_CONSUMERS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CONSUMER_ERROR,
        payload: error.response.msg,
      });
    }
  };

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
    } catch (error) {
      dispatch({
        type: CONSUMER_ERROR,
        payload: error.response.msg,
      });
    }
  };
  //Delete consumer
  const deleteConsumer = async (_id) => {
    try {
      await axios.delete(`/api/consumers/${_id}`);
      dispatch({ type: DELETE_CONSUMER, payload: _id });
    } catch (error) {
      dispatch({
        type: CONSUMER_ERROR,
        payload: error.response.msg,
      });
    }
  };
  //Update Consumer
  const updateConsumer = async (consumer) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/consumers/${consumer._id}`,
        consumer,
        config
      );
      dispatch({ type: UPDATE_CONSUMER, payload: res.data });
    } catch (error) {
      dispatch({
        type: CONSUMER_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // clear consumers
  const clearConsumers = (consumer) => {
    dispatch({ type: CLEAR_CONSUMERS });
  };

  // set current consumer
  const setCurrent = (consumer) => {
    dispatch({ type: SET_CURRENT, payload: consumer });
  };
  //clear current consumer
  const clearCurrent = (consumer) => {
    dispatch({ type: CLEAR_CURRENT });
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
        getConsumers,
        clearFilter,
        clearConsumers,
      }}
    >
      {props.children}
    </ConsumerContext.Provider>
  );
};
export default ConsumerState;
