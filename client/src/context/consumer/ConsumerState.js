import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
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
} from "../types";

//defining initial state

const ConsumerState = (props) => {
  const initialState = {
    consumers: [
      {
        _id: "601523cd9b53382f107de4d4",
        type: "staff",
        first_name: "Manish",
        last_name: "Neupane",
        email: "manis@m.com",
        phone: "56565344",
        address: "city",
        symptoms: "none",
        travel_history: "none",
      },
      {
        _id: "601523cd9b53382f107de55",
        type: "visitor",
        first_name: "ast",
        last_name: "Nee",
        email: "matashs@m.com",
        phone: "565653674",
        address: "htona",
        symptoms: "none",
        travel_history: "none",
      },
    ],

    current: null,
    filtered: null,
  };
  //dispatching object to the useReducer()
  const [state, dispatch] = useReducer(consumerReducer, initialState);

  //Add consumer
  const addConsumer = (consumer) => {
    consumer.id = uuid();
    dispatch({ type: ADD_CONSUMER, payload: consumer });
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
