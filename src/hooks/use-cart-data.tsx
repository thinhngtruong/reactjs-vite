import { useState, useEffect } from "react";
import { CART_DATA } from "src/constants";
import { CartData } from "src/components/order-content/types";

export const useCartData = () => {
  const [cartData, setCartData] = useState<CartData>(CART_DATA);

  useEffect(() => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "");
      console.log(cart)
      if (cart) {
        setCartData(cart);
      } 
    } catch (err) {
      console.log(err);
    }
  }, []);

  return {
    cartData,
    setCartData
  };
};
