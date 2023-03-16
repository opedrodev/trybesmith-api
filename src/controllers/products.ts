import { Request, Response } from 'express';
import ProductsService from '../services/products';

/**
 * @description - Add a new product to the database 
 */
async function addProduct(req: Request, res: Response) {
  const { name, amount } = req.body;
  const id = await ProductsService.addProduct({ name, amount });
  res.status(201).json({ id, name, amount });
}

/**
 * @description - Get all products from the database
 */
async function getAllProducts(_req: Request, res: Response) {
  const products = await ProductsService.getAllProducts();
  res.status(200).json(products);
}

const ProductsController = {
  addProduct,
  getAllProducts,
};

export default ProductsController;