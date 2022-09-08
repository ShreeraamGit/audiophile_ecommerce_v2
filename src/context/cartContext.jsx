import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  currentIconState: false,
  setCurrentIconState: () => {},
});

export const CartProvider = ({ children }) => {
  const [currentIconState, setCurrentIconState] = useState(false);

  const cartIconHandler = () => {
    setCurrentIconState((previous) => !previous);
  };

  const value = {
    currentIconState,
    setCurrentIconState,
    cartIconHandler,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
