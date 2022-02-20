import React from "react";
import classnames from "classnames";
import { TableType } from "./types";
import "./index.scss";

export const Table = (props: TableType) => {
  const { style, className, renderHeader, renderBody } = props;

  return (
    <div className={classnames(className, "table")} style={style}>
      <div className="table-header">{renderHeader}</div>
      <div className="table-body">{renderBody}</div>
    </div>
  );
};
