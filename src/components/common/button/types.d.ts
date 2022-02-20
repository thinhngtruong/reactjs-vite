export interface ButtonType {
  children?: React.ReactElement | string;
  type?: "default" | "primary" | "secondary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
};