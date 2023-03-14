import { IProduct } from '../interfaces';
import ProductsModel from '../models/products';

async function addProduct({ name, amount }: IProduct) {
  const { insertId } = await ProductsModel.addProduct({ name, amount });
  return insertId;
}

async function getAllProducts() {
  const products = await ProductsModel.getAllProducts();
  return products;
}

const ProductsService = {
  addProduct,
  getAllProducts,
};

export default ProductsService;