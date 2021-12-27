import React, { useState } from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";
import { nanoid } from "nanoid";

function Grocery() {
  const [items, setItems] = useState([]);
  const getItem = (item) => {
    const payload = {
      title: item,
      status: false,
      id: nanoid(7),
    };
    console.log(payload.id);
    setItems([...items, payload]);
  };
  return (
    <>
      <GroceryList data={getItem} />
      <GroceryInput items={items} />
    </>
  );
}

export default Grocery;
