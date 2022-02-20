import Product1Img from "src/assets/images/product1-img.png";
import Product2Img from "src/assets/images/product2-img.png";

export const HEADER = [
  {
    id: 1,
    name: "",
  },
  {
    id: 2,
    name: "PRODUCT",
  },
  {
    id: 3,
    name: "QUANTITY",
  },
  {
    id: 4,
    name: "PRICE",
  },
];

// Dump data
export const CART_DATA = {
  id: 'US5426899',
  created: new Date(2021, 2, 6), 
  updated: new Date(2021, 2, 6), 
  name: "Ryan Fralick",
  address: "1489 DESERT SPRINGS AVE RICHLAND, Washington 99352",
  country: "United States",
  cart: [
    {
      id: 1,
      img: Product1Img,
      name: "Ultricies Nibh",
      quantity: 2,
      price: 8.99,
    },
    {
      id: 2,
      img: Product2Img,
      name: "Fringilla Sollicitudin Consectetur",
      quantity: 1,
      price: 14.99,
    },
  ],
  tags: [
    {
      id: 1,
      name: 'SUBSCRIPTION_ORDER'
    }, 
    {
      id: 2,
      name: 'PAID'
    }, 
    {
      id: 3,
      name: 'UNFULFULLED'
    }, 
  ]
};

export const CART_ACTIONS = [
  {
    id: 1,
    name: 'Cancel',
    modalContent: 'Your order has been cancelled' 
  },
  {
    id: 2,
    name: 'Refund',
    modalContent: 'Your order is being reviewed and refunded' 
  },
  {
    id: 3,
    name: 'Resend Confirmation',
    modalContent: 'Your order has been resent confirmation' 
  },
  {
    id: 4,
    name: 'Resend Tracking',
    modalContent: 'Your order has been resent tracking' 
  }
]