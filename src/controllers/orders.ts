import { Request, Response } from 'express';
import OrdersService from '../services/orders';

/**
 * @description - Get all orders from the database 
 */
async function getOrders(_req: Request, res: Response) {
  const result = await OrdersService.getOrders();
  res.status(200).json(result);
}

/**
 * @description - Create a new order
 */
async function createOrder(req: Request, res: Response) {
  const { productsIds, token: { id } } = req.body;

  await OrdersService.createOrder({ productsIds, userId: id });
  res.status(201).json({ userId: id, productsIds });
}

const OrdersController = {
  getOrders,
  createOrder,
};

export default OrdersController;
