import { createContext, useEffect, useState, useMemo, useReducer } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {};
  const [cart, setCart] = useState(initialState);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      setCart(cartData);
    }
  }, []);

  useEffect(() => {
    if (cart !== initialState)
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (newProduct) => {
    const prevProduct = cart[newProduct._id];
    const prevQuantity = prevProduct?.quantity || 0;
    const prevPrice = prevProduct?.currentPrice || 0;
    setCart((prev) => ({
      ...prev,
      [newProduct._id]: {
        ...newProduct,
        quantity: prevQuantity + 1,
        currentPrice: prevPrice + newProduct.price,
      },
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const newData = { ...prev };
      delete newData[productId];
      return newData;
    });
  };

  const resetCart = () => {
    setCart({});
  };

  const selectQuantity = (value, productId) => {
    const product = cart[productId];
    const updatedPrice = product.price * value;
    setCart((prev) => ({
      ...prev,
      [productId]: {
        ...product,
        quantity: parseInt(value),
        currentPrice: updatedPrice,
      },
    }));
  };

  return (
    <DataContext.Provider
      value={{
        cart,
        setCart,
        removeFromCart,
        resetCart,
        selectQuantity,
        addToCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
