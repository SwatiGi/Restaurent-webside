import React, { useState } from "react";
import CardContext from "./CardContext";

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({}); // {id: {...item, quantity}}

  // Add to cart
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev[item.id];
      if (existing) {
        return {
          ...prev,
          [item.id]: {
            ...existing,
            quantity: existing.quantity + 1
          }
        };
      } else {
        return {
          ...prev,
          [item.id]: { ...item, quantity: 1 }
        };
      }
    });
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        quantity: Math.max(1, quantity) // kam se kam 1
      }
    }));
  };

  return (
    <CardContext.Provider value={{ cartItems, addToCart, updateQuantity }}>
      {children}
    </CardContext.Provider>
  );
};

export default ContextProvider;
