export interface InputType {
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}