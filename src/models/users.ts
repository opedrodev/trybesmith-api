import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

/**
 * @param {IUser} user - The user to be added
 * @returns {Promise<ResultSetHeader>} - Returns the result of the query
 */
async function addUser({
  username,
  vocation,
  level,
  password,
}: IUser): Promise<IUser & ResultSetHeader> {
  const [result] = await connection.execute<RowDataPacket[] & ResultSetHeader & IUser>(`
    INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);
    `, [username, vocation, level, password]);

  return result;
}

const UserModel = {
  addUser,
};

export default UserModel;
