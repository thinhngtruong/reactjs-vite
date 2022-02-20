import React from "react";
import classnames from "classnames";
import { Input } from "src/components/common";
import { OrderHeaderType } from "./types";
import "./index.scss";

export const OrderHeader = (props: OrderHeaderType) => {
  const {
    orderId = "",
    createdDate = "",
    updatedDate = "",
    canEdit = false,
    updateCartData,
    style,
    className,
  } = props;

  const handleChangeInput = (name: string, target: HTMLInputElement) => {
    // Fake change order info instead of calling API
    const { value } = target;
    typeof updateCartData === 'function' && updateCartData(name, value);
  };

  return (
    <article style={style} className={classnames(className, "order-header")}>
      <h3 className="order-id">
        <b>Order</b>{" "}
        {canEdit ? (
          <Input
            aria-label="Enter order id"
            placeholder="Enter order id"
            value={orderId}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              handleChangeInput("id", e.target as HTMLInputElement)
            }
          />
        ) : (
          <span>{orderId}</span>
        )}
      </h3>
      <p className="order-date">
        <p>{`Created on ${createdDate}`}</p>
        <p>{`Last updated on ${updatedDate}`}</p>
      </p>
    </article>
  );
};
