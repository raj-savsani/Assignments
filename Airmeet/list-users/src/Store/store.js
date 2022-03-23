import { createStore } from "redux";
import { reducer as UserReducer } from "./reducer";

export const store = createStore(UserReducer);
