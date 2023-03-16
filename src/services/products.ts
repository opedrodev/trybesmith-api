import { IProduct } from '../interfaces';
import ProductsModel from '../models/products';

/**
 * @param {IProduct} product - The product to be added
 * @returns {Promise<number>} - Returns the inserted id of the product
 */
async function addProduct({ name, amount }: IProduct): Promise<number> {
  const { insertId } = await ProductsModel.addProduct({ name, amount });
  return insertId;
}

/**
 * @returns {Promise<IProduct[]>} - Returns an array of products
 */
async function getAllProducts(): Promise<IProduct[]> {
  const products = await ProductsModel.getAllProducts();
  return products;
}

const ProductsService = {
  addProduct,
  getAllProducts,
};

export default ProductsService;