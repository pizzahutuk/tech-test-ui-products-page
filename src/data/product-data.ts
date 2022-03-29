import {Product, ProductType} from "../types/products";

export const products: Product[] = [
  {title: 'Pepperoni Pizza', type: ProductType.PIZZA, price: {netPrice: 10.00, grossPrice: 12.00}, image: 'fa-pizza-slice'},
  {title: 'Cheese Triangles', type: ProductType.SIDE, price: {netPrice: 5.00, grossPrice: 6.00}, image: 'fa-cheese'},
  {title: 'Ben & Jerry\'s', type: ProductType.DESSERT, price: {netPrice: 5.00, grossPrice: 6.00}, image: 'fa-ice-cream'},
]
