import React from "react";
import classnames from "classnames";
import { TagType } from "./types";
import "./index.scss";

export const Tag = (props: TagType) => {
  const { children, style, className, ariaLabel } = props;

  return (
    <span
      style={style}
      className={classnames("tag", className)}
      aria-label={ariaLabel}
    >
      {children}
    </span>
  );
};
