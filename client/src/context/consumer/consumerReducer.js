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
    case UPDATE_CONSUMER:
      return {
        ...state,
        consumers: state.consumers.map((consumer) =>
          consumer.id === action.payload.id ? action.payload : consumer
        ),
      };
    case DELETE_CONSUMER:
      return {
        ...state,
        consumers: state.consumers.filter(
          (consumer) => consumer._id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_CONSUMERS:
      return {
        ...state,
        filtered: state.consumers.filter((consumer) => {
          //creating regular expression and using gi to match irrespective of the case sensetive
          const regex = new RegExp(`${action.payload}`, "gi");
          //will return anything that matches the text passed in
          return (
            consumer.first_name.match(regex) ||
            consumer.last_name.match(regex) ||
            consumer.email.match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
