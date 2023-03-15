import OrdersModel from '../models/orders';

async function getOrders() {
  const result = await OrdersModel.getOrders();
  return result;
}

const OrdersService = {
  getOrders,
};

export default OrdersService;