import express from 'express';
import ProductsController from '../controllers/products';

const router = express.Router();

router.post('/', ProductsController.addProduct);
router.get('/', ProductsController.getAllProducts);

export default router;