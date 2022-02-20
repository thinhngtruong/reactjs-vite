export interface CartData {
  id: string;
  created: Date,
  updated: Date,
  name: string,
  address: string,
  country: string,
  cart: Array<CartItem>,
  tags: Array<Tags>
};

export interface CartItem {
  id: number;
  name: string;
  img?: string;
  price: number;
  quantity: number;
};

export interface Tags {
  id: number;
  name: string;
};

export interface OrderContentType {
  cartData: CartData;
  canEdit?: boolean;
  updateCartData?: (name: string, value: string) => void;
  updateOrderQuantity?: (id: string, value: string) => void;
};
