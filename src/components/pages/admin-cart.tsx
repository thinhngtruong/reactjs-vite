import React, { useState } from "react";
import { OrderContent } from "src/components/order-content";
import { CartItem } from "src/components/order-content/types";
import { OrderFooter } from "src/components/order-footer";
import { OrderHeader } from "src/components/order-header";
import { CART_ACTIONS } from "src/constants";
import { useCartData } from "src/hooks";
import { formatDate } from "src/utils";
import "src/styles/cart.scss";

export const AdminCartPage = () => {
  const { cartData, setCartData } = useCartData();

  const updateCartData = (name: string, value: string) => {
    setCartData((prev: any) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updateOrderQuantity = (id: string, value: string) => {
    // Immutable cart data
    setCartData((prev: any) => {
      return {
        ...prev,
        cart: [
          ...prev.cart.map((item: CartItem) => {
            if (item.id.toString() !== id) return item;
            return {
              ...item,
              quantity: value ? parseInt(value) : 0,
            };
          }),
        ],
      };
    });
  };

  const handleSaveChanges = () => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartData));
      alert('Save changes successfully!');
    } catch(err) {
      console.log(err)
    }
  };

  return (
    <main className="cart-page">
      <section className="order-card">
        <OrderHeader
          orderId={cartData.id}
          updatedDate={formatDate(cartData.updated)}
          createdDate={formatDate(cartData.created)}
          canEdit={true}
          updateCartData={updateCartData}
        />
        <section className="order-information">
          <OrderContent
            cartData={cartData}
            canEdit={true}
            updateCartData={updateCartData}
            updateOrderQuantity={updateOrderQuantity}
          />
          <OrderFooter
            cartActions={CART_ACTIONS}
            canEdit={true}
            handleSaveChanges={handleSaveChanges}
          />
        </section>
      </section>
    </main>
  );
};
