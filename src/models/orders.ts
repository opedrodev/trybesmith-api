import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces';
import connection from './connection';

/**
 * @returns {Promise<IOrder[]>} - Returns an array of orders
 */
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

/**
 * @param userId - The id of the user
 * @returns {Promise<number>} - Returns the id of the order
 */
async function createOrder(userId: number): Promise<number> {
  const [{ insertId }] = await connection.execute<RowDataPacket[] & ResultSetHeader>(`
    INSERT INTO Trybesmith.orders (user_id) VALUES (?);
  `, [userId]);

  return insertId;
}

/**
 * @param orderId - The id of the order
 * @param productId - The id of the product 
 * @returns {Promise<ResultSetHeader>} - Returns the result of the query
 */
async function updateProduct(orderId: number, productId: number): Promise<ResultSetHeader> {
  const [result] = await connection.execute<RowDataPacket[] & ResultSetHeader>(`
    UPDATE Trybesmith.products
    SET order_id = ?
    WHERE id = ?;
  `, [orderId, productId]);

  return result;
}

const OrdersModel = {
  getOrders,
  createOrder,
  updateProduct,
};

export default OrdersModel;