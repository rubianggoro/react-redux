import { INCREMENT, DECREMENT } from "../Actions/CounterActions";

const initialState = {
  cart: 0,
};

const Counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        cart: state.cart + 1,
      };
    case DECREMENT:
      return {
        ...state,
        cart: state.cart - 1,
      };
    default:
      return state;
  }
};
export default Counter;
