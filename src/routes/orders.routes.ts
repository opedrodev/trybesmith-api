import express from 'express';
import OrdersController from '../controllers/orders';
import OrderMiddleware from '../middlewares/order';
import TokenMiddleware from '../middlewares/token';

const router = express.Router();

router.get('/', OrdersController.getOrders);
router.post('/', TokenMiddleware.validate, OrderMiddleware.validate, OrdersController.createOrder);

export default router;