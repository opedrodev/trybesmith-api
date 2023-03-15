import express from 'express';
import ProductsController from '../controllers/products';
import ProductMiddleware from '../middlewares/product';

const router = express.Router();

router.post(
  '/',
  ProductMiddleware.product,
  ProductsController.addProduct,
);

router.get('/', ProductsController.getAllProducts);

export default router;