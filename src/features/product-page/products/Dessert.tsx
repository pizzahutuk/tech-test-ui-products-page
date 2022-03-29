import React from "react";
import { Currency } from "../../../components/currency/Currency";
import { BaseProduct } from "../../../types/products";
import "./Product.css";

type Props = {
  product: BaseProduct;
};
const Dessert = ({ product }: Props) => {
  return (
    <div className="Product">
      <i className={`Product-icon fa ${product.image}`}></i>
      <div className="Product-title">{product.title}</div>
      <div className="Product-add">
        Add to cart{" "}
        <Currency
          value={product.price.grossPrice}
          currency="GBP"
          locale="en-GB"
        />
      </div>
    </div>
  );
};

export default Dessert;
