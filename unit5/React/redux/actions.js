import { ADD_TODO, INC_COUNT } from "./actionTypes.js";


export const IncCount = (data) => {
  return { type: INC_COUNT, payload: data };
};


export const AddTodo = (data) => {
    return { type: ADD_TODO, payload: data };
}