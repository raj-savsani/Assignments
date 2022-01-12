import {INC_COUNT, ADD_TODO} from "./actionTypes.js";



export const reducer = (state, action) => {
  switch (action.type) {
    case INC_COUNT:
      return { ...state, count: state.count + action.payload };
    case ADD_TODO:
      return { ...state, todo: [...state.todo, action.payload] };
    default:
      return state;
  }
};
