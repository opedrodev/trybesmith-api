import { IOrder } from '../interfaces';
import OrdersModel from '../models/orders';

/**
 * @returns {Promise<IOrder[]>} - Returns an array of orders
 */
async function getOrders(): Promise<IOrder[]> {
  const result = await OrdersModel.getOrders();
  return result;
}

/**
 * @description - Creates an order and updates the products
 * @param order - The order to be created
 * @returns {Promise<number>} - Returns the id of the order
 */
async function createOrder(order: IOrder): Promise<number> {
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