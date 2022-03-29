import {Price} from "./price";

export enum ProductType {
  SIDE = 'side',
  PIZZA = 'pizza',
  DESSERT = 'dessert'
}

export type Product = {
  title: string;
  type: ProductType;
  price: Price;
  image: string;
}


