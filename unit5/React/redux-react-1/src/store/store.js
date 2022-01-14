import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as TodosReducer } from "../Feature/Todos/reducer";
import { reducer as CounterReducer } from "../Feature/Counter/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counterState: CounterReducer,
  todosState: TodosReducer,
});

// const logger = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     // console.log(action);
//     return next(action(store.dispatch));
//   }
//   next(action);
// };

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  //
);
// console.log(store.getState());
