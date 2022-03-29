import React, {useEffect, useState} from 'react';
import ProductsService from "../../services/products-service";
import {AnyProduct, ProductType} from "../../types/products";
import Dessert from "./products/Dessert";
import Side from "./products/Side";
import "./ProductPage.css"

const componentMap = {
  [ProductType.DESSERT]: Dessert,
  [ProductType.SIDE]: Side,
  [ProductType.PIZZA]: null
}

const ProductPage = () => {
  const [products, setProducts] = useState<AnyProduct[]>([]);
  useEffect(() => {
    const fetchProducts = async() => {
      const productData = await ProductsService.getProducts()
      setProducts(productData)
    }
    try {
      fetchProducts();
    } catch (err) {
      console.error({err});
    }
  }, [setProducts])
  return <>
    <h1>Products</h1>
    <div className='ProductPage-products'>
      {products.map(product => {
        const ProductComponent = componentMap[product.type];
        return ProductComponent ? <ProductComponent product={product} /> : null;
      })}
    </div>
  </>
}

export default ProductPage
