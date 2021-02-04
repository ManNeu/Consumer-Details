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
  };
  //dispatching object to the useReducer()
  const [state, dispatch] = useReducer(consumerReducer, initialState);

  //Add consumer
  const addConsumer = (consumer) => {
    consumer.id = uuid();
    dispatch({ type: ADD_CONSUMER, payload: consumer });
  };
  //Delete consumer
  const deleteConsumer = (id) => {
    dispatch({ type: DELETE_CONSUMER, payload: id });
  };
  // set current consumer

  //clear current consumer

  //Update Consumer

  //filter consumers

  //clear filter

  //returning context provider such that we can wrap our apps with it
  return (
    <ConsumerContext.Provider
      value={{
        consumers: state.consumers,
        addConsumer,
        deleteConsumer,
      }}
    >
      {props.children}
    </ConsumerContext.Provider>
  );
};
export default ConsumerState;
