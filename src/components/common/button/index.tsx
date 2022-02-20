import React from "react";
import classnames from "classnames";
import { ButtonType } from "./types";
import "./index.scss";

export const Button = (props: ButtonType) => {
  const {
    children,
    type = "default",
    disabled = false,
    onClick = () => {},
    style,
    className,
    ariaLabel,
  } = props;

  return (
    <button
      style={style}
      className={classnames("btn", className, type)}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
