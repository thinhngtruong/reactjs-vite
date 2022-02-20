export interface AddressType {
  name: string,
  address: string, 
  country: string,
  className?: string;
  style?: React.CSSProperties;
  canEdit: boolean;
  handleChangeInput: (name: string, target: HTMLInputElement) => void;
};