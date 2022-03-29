import React from 'react';
import {Cart as CartType} from "../../types/cart";
import {ProductType} from "../../types/products";
import CartLineItem from "./CartLineItem";
import "./Cart.css"

const Cart = () => {
  const cart: CartType = {
    lineItems: [
      {
        lineItemPrice: {
          netPrice: 5,
          grossPrice: 6,
        },
        lineItemProductData: {
          title: 'Cheese Triangles',
          type: ProductType.SIDE,
          price: {netPrice: 5.00, grossPrice: 6.00},
          image: 'fa-cheese'
        }
      }
    ],
    cartPrice: {
      netPrice: 5,
      grossPrice: 6,
    }
  }
  return <div className="Cart">
    <h2>Cart</h2>
    {cart.lineItems.map(cartLineItem => {
      return <CartLineItem cartLineItem={cartLineItem} />
    })}
    <button className="Cart-checkout">Checkout £{cart.cartPrice.grossPrice}</button>
  </div>
}

export default Cart
