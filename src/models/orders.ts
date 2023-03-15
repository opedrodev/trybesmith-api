import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces';
import connection from './connection';

async function getOrders(): Promise<IOrder[]> {
  const [result] = await connection.execute<IOrder[] & RowDataPacket[]>(`
    SELECT 
      orders.id,
      orders.user_id as userId,
      JSON_ARRAYAGG(products.id) AS productsIds
    FROM
      Trybesmith.orders
          INNER JOIN
      Trybesmith.products AS products ON orders.id = products.order_id
    GROUP BY orders.id , orders.user_id;
  `);

  return result;
}

const OrdersModel = {
  getOrders,
};

export default OrdersModel;