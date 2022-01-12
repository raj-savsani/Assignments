import { createStore, combineReducers } from "redux";
import { reducer as TodosReducer } from "../Feature/Todos/reducer";
import { reducer as CounterReducer } from "../Feature/Counter/reducer";

const rootReducer = combineReducers({
  counterState: CounterReducer,
  todosState: TodosReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log(store.getState());
