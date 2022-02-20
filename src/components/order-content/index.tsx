import React from "react";
import { Address } from "src/components/address";
import { Table, Tag, Input } from "src/components/common";
import { HEADER } from "src/constants";
import { calTotalCartPrice } from "src/utils";
import { OrderContentType } from "./types";
import "./index.scss";

export const OrderContent = (props: OrderContentType) => {
  const { cartData, canEdit = false, updateCartData, updateOrderQuantity } = props;

  const handleChangeInput = (name: string, target: HTMLInputElement) => {
    // Fake change order info instead of calling API
    const { value } = target;
    typeof updateCartData === "function" && updateCartData(name, value);
  };

  const handleChangeQuantity = (id: string, target: HTMLInputElement) => {
    // Fake change order info instead of calling API
    const { value } = target;
    typeof updateOrderQuantity === "function" && updateOrderQuantity(id, value);
  };

  
  return (
    <>
      <Table
        renderHeader={HEADER.map((item) => (
          <div
            key={item.id}
            style={{
              textAlign: `${item.name === "PRODUCT" ? "left" : "center"}`,
            }}
          >
            {item.name}
          </div>
        ))}
        renderBody={
          <React.Fragment>
            {cartData.cart.map((item) => (
              <div className="table-row" key={item.id}>
                <div>
                  <img src={item.img} alt={item.name} title={item.name} />
                </div>
                <span className="product-name">{item.name}</span>
                {canEdit ? (
                  <span>
                    <Input
                      aria-label="Enter product quantity"
                      placeholder="Enter product quantity"
                      style={{width: '50px'}}
                      value={item.quantity}
                      onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        handleChangeQuantity(item.id.toString(), e.target as HTMLInputElement)
                      }
                    />
                  </span>
                ) : (
                  <span>{item.quantity}</span>
                )}
                <span>{`$${item.quantity * item.price}`}</span>
              </div>
            ))}
            <div className="table-row">
              <div className="total">
                <b>Total</b>
              </div>
              <span></span>
              <span></span>
              <span>{`$${calTotalCartPrice(cartData.cart)}`}</span>
            </div>
          </React.Fragment>
        }
      />
      <h3 className="shipping-address">Shipping address</h3>
      <Address
        name={cartData.name}
        address={cartData.address}
        country={cartData.country}
        canEdit={canEdit}
        handleChangeInput={handleChangeInput}
      />
      <section className="tags-information">
        {cartData.tags.map((tag) => (
          <Tag key={tag.id} ariaLabel={tag.name}>
            {tag.name}
          </Tag>
        ))}
      </section>
    </>
  );
};
