import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartitems contains productoadd
  const existingCartItems = cartItems.find(
    (items) => items.id === productToAdd.id
  );
  //if found, increment quantity

  if (existingCartItems) {
    return cartItems.map((items) =>
      items.id === productToAdd.id
        ? { ...items, quantity: items.quantity + 1 }
        : items
    );
  }
  //return new array with modified cartitems/newcartitem.
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  currentIconState: false,
  setCurrentIconState: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [currentIconState, setCurrentIconState] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemsFromCart = () => {
    setCartItems([]);
  };

  const cartIconHandler = () => {
    setCurrentIconState((previous) => !previous);
  };

  const value = {
    currentIconState,
    setCurrentIconState,
    cartIconHandler,
    addItemToCart,
    cartItems,
    removeItemsFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
