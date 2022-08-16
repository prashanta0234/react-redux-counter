import { DECREMENT, INCREMENT } from "./actionType";

const initialState = {
  value: 10,
};

const reduceCounter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};
export default reduceCounter;
