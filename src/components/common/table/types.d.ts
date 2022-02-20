export interface TableType {
  renderHeader: Array<ReactElement> | ReactElement;
  renderBody: Array<ReactElement> | ReactElement;
  className?: string;
  style?: React.CSSProperties;
};