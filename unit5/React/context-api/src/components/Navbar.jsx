import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";

function Navbar() {
  
  return (
    <div>
      <Cart />
    </div>
  );
}

export default Navbar;
