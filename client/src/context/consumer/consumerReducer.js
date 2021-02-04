import {
  ADD_CONSUMER,
  DELETE_CONSUMER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONSUMER,
  FILTER_CONSUMERS,
  CLEAR_FILTER,
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ADD_CONSUMER:
      return {
        ...state,
        consumers: [...state.consumers, action.payload],
      };
    case DELETE_CONSUMER:
      return {
        ...state,
        consumers: state.consumers.filter(
          (consumer) => consumer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
