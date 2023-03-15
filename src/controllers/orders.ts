import { Request, Response } from 'express';
import OrdersModel from '../models/orders';

async function getOrders(_req: Request, res: Response) {
  const result = await OrdersModel.getOrders();
  res.status(200).json(result);
}

const OrdersController = {
  getOrders,
};

export default OrdersController;
