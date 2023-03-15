import express from 'express';
import OrdersController from '../controllers/orders';

const router = express.Router();

router.get('/', OrdersController.getOrders);

export default router;