import React, { useState, useEffect } from "react";

function UseEffects() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);
  useEffect(() => {
    console.log("no depencency empty array[]");
  }, []);
  useEffect(() => {
    console.log("this depends on count");
  }, [count]);
  useEffect(() => {
    console.log("this depends on age");
  }, [age]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add 1 count
      </button>
      <h1>Age: {age}</h1>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Add 1 to age
      </button>
    </div>
  );
}

export default UseEffects;
