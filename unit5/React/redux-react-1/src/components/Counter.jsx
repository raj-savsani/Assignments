import { useSelector, useDispatch } from "react-redux";

import React from "react";
import { decCount, IncCount } from "../Feature/Counter/action";


function Counter() {
  const counter = useSelector((state) => state.counterState.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button
        onClick={() => {
          dispatch(IncCount(1));
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          dispatch(decCount(1));
        }}
      >
        Sub 1
      </button>
    </div>
  );
}

export default Counter;
