import React, { useState } from "react";
import("../CSS/GroceryList.css");

function GroceryList({ data }) {
  const [text, setText] = useState("");
  const handelChange = (e) => {
    setText(e.target.value);
  };

  const handelClick = () => {
    data(text);
  };

  return (
    <div className="grocery">
      <input
        type="text"
        placeholder="Enter Product Name"
        onChange={handelChange}
      />
      <button onClick={handelClick}>Add To List</button>
    </div>
  );
}

export default GroceryList;
