import { HomePage, CartPage, AdminCartPage } from "src/components/pages";

export const ROUTES = [
  {
    name: "Home",
    path: "/",
    component: <HomePage />,
  },
  {
    name: "Cart",
    path: "/cart",
    component: <CartPage />,
  },
  {
    name: "Cart Admin",
    path: "/admin/cart",
    component: <AdminCartPage />,
  },
];
