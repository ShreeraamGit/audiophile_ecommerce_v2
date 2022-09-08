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
  total: 0,
  setTotal: () => {},
  handleClickIncrement: () => {},
  handleClickDecrement: () => {},
  handleDelete: () => {},
});

export const CartProvider = ({ children }) => {
  const [currentIconState, setCurrentIconState] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemsFromCart = () => {
    setCartItems([]);
  };

  const cartIconHandler = () => {
    setCurrentIconState((previous) => !previous);
  };

  const handleClickIncrement = (items, id) => {
    const idx = items.findIndex((counter) => counter.id === id);
    const counters = [...items];
    counters[idx] = {
      ...counters[idx],
      quantity: counters[idx].quantity + 1,
    };
    setCartItems(counters);
    ///console.log(newCartItems);
  };

  const handleClickDecrement = (items, id) => {
    const idx = items.findIndex((counter) => counter.id === id);
    const counters = [...items];
    if (counters[idx].quantity > 1) {
      counters[idx] = {
        ...counters[idx],
        quantity: counters[idx].quantity - 1,
      };
      setCartItems(counters);
    } else {
      handleDelete(items, id);
    }
    ///console.log(newCartItems);
  };

  const handleDelete = (items, id) => {
    const deletedCartItems = items.filter((items) => {
      return items.id !== id;
    });
    setCartItems(deletedCartItems);
  };

  const value = {
    currentIconState,
    setCurrentIconState,
    cartIconHandler,
    addItemToCart,
    cartItems,
    removeItemsFromCart,
    total,
    setTotal,
    handleClickIncrement,
    handleClickDecrement,
    handleDelete,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
