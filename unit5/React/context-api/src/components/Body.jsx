import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Body() {
  const { handelCartUpdate } = useContext(CartContext);

  return (
    <div>
      Body
      <button
        onClick={() => {
          handelCartUpdate(1);
        }}
      >
        Add To cart
      </button>
    </div>
  );
}

export default Body;
