import {Price} from "./price";
import {Product} from "./products";

export type LineItem = {
  lineItemPrice: Price
  lineItemProductData: Product
}

export type Cart = {
  lineItems: LineItem[]
  cartPrice: Price
}
