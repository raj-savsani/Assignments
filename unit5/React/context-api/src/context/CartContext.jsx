import { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(0);

  const handelCartUpdate = (value) => {
    setCart(cart + value);
  };
  return (
    <CartContext.Provider value={{ cart, handelCartUpdate }}>
      {children}
    </CartContext.Provider>
  );
};
