export interface OrderHeaderType {
  orderId: string;
  createdDate: string;
  updatedDate: string;
  className?: string;
  style?: React.CSSProperties;
  canEdit?: boolean;
  updateCartData?: (name: string, value: string) => void;
};