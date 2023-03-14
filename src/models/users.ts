import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

async function addUser({ username, vocation, level, password }: IUser): Promise<ResultSetHeader> {
  const [result] = await connection.execute<RowDataPacket[] & ResultSetHeader>(`
    INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);
    `, [username, vocation, level, password]);

  return result;
}

const UserModel = {
  addUser,
};

export default UserModel;