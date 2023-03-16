import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

/**
 * @param {IProduct} product - The product to be added
 * @returns {Promise<ResultSetHeader>} - Returns the result of the query
 */
async function addProduct({ name, amount }: IProduct): Promise<ResultSetHeader> {
  const [result] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);
  `, [name, amount]);

  return result;
}

/**
 * @returns {Promise<IProduct[]>} - Returns an array of products
 */
async function getAllProducts(): Promise<IProduct[]> {
  const [result] = await connection.execute<IProduct[] & RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products;
  `);

  return result;
}

const ProductsModel = {
  addProduct,
  getAllProducts,
};

export default ProductsModel;