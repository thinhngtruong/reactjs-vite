import React from "react";
import { OrderContent } from "src/components/order-content";
import { OrderFooter } from "src/components/order-footer";
import { OrderHeader } from "src/components/order-header";
import { CART_ACTIONS } from "src/constants";
import { useCartData } from "src/hooks";
import { formatDate } from "src/utils";
import "src/styles/cart.scss";

export const CartPage = () => {
  const { cartData } = useCartData();

  return (
    <main className="cart-page">
      <section className="order-card">
        <OrderHeader
          orderId={cartData.id}
          updatedDate={formatDate(cartData.updated)}
          createdDate={formatDate(cartData.created)}
        />
        <section className="order-information">
          <OrderContent cartData={cartData} />
          <OrderFooter cartActions={CART_ACTIONS} />
        </section>
      </section>
    </main>
  );
};
