import express from 'express';

import * as productsController from '../controllers/products';

const router = express.Router();

router.post('/', productsController.addProduct);
router.get('/', productsController.getAllProducts);

export default router;