import { IOrder } from '../interfaces';
import OrdersModel from '../models/orders';

async function getOrders() {
  const result = await OrdersModel.getOrders();
  return result;
}

async function createOrder(order: IOrder) {
  const orderId = await OrdersModel.createOrder(order.userId);

  const products = order.productsIds
    .map((productId) => OrdersModel.updateProduct(orderId, productId));

  await Promise.all(products);

  return orderId;
}

const OrdersService = {
  getOrders,
  createOrder,
};

export default OrdersService;