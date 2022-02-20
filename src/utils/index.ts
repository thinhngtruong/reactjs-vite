import { format } from 'date-fns'
import { CartItem } from 'src/components/order-content/types'

export const formatDate = (date: Date) : string => {
  return format(new Date(date), 'MMM do yyyy')
}

export const calTotalCartPrice = (cartItems: Array<CartItem>) : number => {
  return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
};