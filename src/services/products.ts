import { IProduct } from '../interfaces';
import * as productsModel from '../models/products';

export async function addProduct({ name, amount }: IProduct) {
  const { insertId } = await productsModel.addProduct({ name, amount });
  return insertId;
}

export async function getAllProducts() {
  const products = await productsModel.getAllProducts();
  return products;
}