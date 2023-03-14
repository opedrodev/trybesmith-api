import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

async function addProduct({ name, amount }: IProduct): Promise<ResultSetHeader> {
  const [result] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);
  `, [name, amount]);

  return result;
}

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