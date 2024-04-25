import { useState, createContext, useContext } from "react";

const CartContext = createContext("");

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const values = {
    cart,
    setCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
