import React, { useState } from "react";
import("../CSS/Counter.css");

function Counter({ initial }) {
  const [count, setCount] = useState(initial);

  const chnageCount = (value) => {
    if (value === "+") {
      return setCount(count + 1);
    } else if (value === "-") {
      return setCount(count - 1);
    } else if (value === "*") {
      return setCount(count * 2);
    }
  };

  return (
    <div className="counter">
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={() => chnageCount("+")}>Add 1</button>
      <button onClick={() => chnageCount("-")}>Reduce 1</button>
      <button onClick={() => chnageCount("*")}>Double</button>
    </div>
  );
}

export default Counter;
