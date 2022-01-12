import { createStore } from "redux";
import { reducer } from "./reducer.js";
import { INC_COUNT, ADD_TODO } from "./actionTypes.js";
import { AddTodo, IncCount } from "./actions.js";

const incCount = { type: "INC_COUNT", payload: 1 }; // fixed, payload is optional
const decCount = { type: "DEC_COUNT", payload: 1 }; // fixed, payload is optional

const addTodoAction = {
  type: "ADD_TODO",
  payload: { id: 1, title: "Learn Redux", status: false },
};

const updateTodoAction = {
  type: "UPDATE_TODO",
  payload: { id: 1, title: "Learn React Redux", status: false },
};
/*
class Store {
  constructor(reducer, init) {
    //
    this.reducer = reducer;
    this.state = init;
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    return (this.state = this.reducer(this.state, action));
  }
}
*/

// action types:

// action creator : function

// pure function

const init = { count: 0, todo: [] };

const store = createStore(reducer, init); // Fixed

console.log(store.getState());

store.dispatch(IncCount(1));
store.dispatch(IncCount(5));
store.dispatch(IncCount(15));

store.dispatch(AddTodo({ id: 1, title: "Learn Redux", status: false }));

store.dispatch(AddTodo({ id: 2, title: "Learn React Redux", status: false }));

console.log(store.getState());
