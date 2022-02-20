import React from "react";
import classnames from "classnames";
import { InputType } from "./types";
import "./index.scss";

export const Input = (props: InputType) => {
  const {
    type = 'text',
    value = '',
    style,
    className,
    ariaLabel,
    placeholder,
    onChange
  } = props;

  return (
    <input
      type={type}
      style={style}
      className={classnames("input", className)}
      aria-label={ariaLabel}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
