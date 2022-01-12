import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  DELETE_TODO_LOADING,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
} from "./actionTypes.js";

export const addTodo = (data) => {
  return { type: ADD_TODO, payload: data };
};



// add
export const addTodoLoading = () => {
  return { type: ADD_TODO_LOADING };
};

export const addTodoSuccess = (data) => {
  return { type: ADD_TODO_SUCCESS, payload: data };
};
export const addTodoError = (err) => {
  return { type: ADD_TODO_ERROR, payload: err };
};


// get
export const getTodoLoading = () => {
  return { type: GET_TODO_LOADING };
};

export const getTodoSuccess = (data) => {
  return { type: GET_TODO_SUCCESS, payload: data };
};
export const getTodoError = (err) => {
  return { type: GET_TODO_ERROR, payload: err };
};


// delete
// export const deleteTodoLoading = () => {
//   return { type: DELETE_TODO_LOADING };
// };

// export const deleteTodoSuccess = () => {
//   return { type: DELETE_TODO_SUCCESS };
// };

// export const deleteTodoError = (err) => {
//   return { type: DELETE_TODO_ERROR, payload: err };
// };
