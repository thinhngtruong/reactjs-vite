import React from "react";
import classnames from "classnames";
import { Input } from "src/components/common";
import { AddressType } from "./types";
import "./index.scss";

export const Address = (props: AddressType) => {
  const {
    name = "",
    address = "",
    country = "",
    canEdit,
    handleChangeInput,
    style,
    className,
  } = props;

  return (
    <section style={style} className={classnames(className, "address", canEdit ? 'edit': '')}>
      <p>
        {canEdit ? (
          <Input
            aria-label="Enter order name"
            placeholder="Enter order name"
            value={name}
            onChange={(e) =>
              handleChangeInput("name", e.target as HTMLInputElement)
            }
          />
        ) : (
          name
        )}
      </p>
      <p className={"address-detail"}>
        {" "}
        {canEdit ? (
          <Input
            aria-label= "Enter order address"
            placeholder="Enter order address"
            value={address}
            onChange={(e) =>
              handleChangeInput("address", e.target as HTMLInputElement)
            }
          />
        ) : (
          address
        )}
      </p>
      <p>
        {" "}
        {canEdit ? (
          <Input
            aria-label="Enter order country"
            placeholder="Enter order country"
            value={country}
            onChange={(e) =>
              handleChangeInput("country", e.target as HTMLInputElement)
            }
          />
        ) : (
          country
        )}
      </p>
    </section>
  );
};
