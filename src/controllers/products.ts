import { Request, Response } from 'express';
import * as productsServices from '../services/products';

export async function addProduct(req: Request, res: Response) {
  const { name, amount } = req.body;
  const id = await productsServices.addProduct({ name, amount });
  res.status(201).json({ id, name, amount });
}

export async function getAllProducts(req: Request, res: Response) {
  const products = await productsServices.getAllProducts();
  res.status(200).json(products);
}