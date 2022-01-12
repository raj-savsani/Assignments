import { DEC_COUNT, INC_COUNT } from "./actionTypes";

const init = { counter: 0 };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case INC_COUNT:
      return { ...state, counter: state.counter + payload };
    case DEC_COUNT:
      return { ...state, counter: state.counter - payload };
    default:
      return state;
  }
};
