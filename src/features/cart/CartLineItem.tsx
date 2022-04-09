import React from "react";
import { Currency } from "../../components/currency/Currency";
import { LineItem } from "../../types/cart";
import "./CartLineItem.css";

type Props = {
  cartLineItem: LineItem;
};
const CartLineItem = ({ cartLineItem }: Props) => {
  return (
    <div className="CartLineItem">
      {cartLineItem.lineItemProductData.title}{" "}
      <Currency
        value={cartLineItem.lineItemPrice.grossPrice}
        currency="GBP"
        locale="en-GB"
      />
    </div>
  );
};

export default CartLineItem;
