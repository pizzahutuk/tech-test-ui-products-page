import {products} from "../data/product-data";
import {Product} from "../types/products";
// mock up API client for fetching data from "backend"
export default class ProductsService {
  static getProducts = async(): Promise<Product[]> => {
    return new Promise<Product[]>((resolve => {
      setTimeout(() => resolve(products), Math.random() * 1000)
    }));
  }
}
