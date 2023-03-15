import { RowDataPacket } from 'mysql2';
import { ILogin, IUser } from '../interfaces';
import connection from './connection';

async function login({ username, password }: ILogin): Promise<IUser> {
  const [[result]] = await connection.execute<IUser[] & RowDataPacket[]>(`
    SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?;
  `, [username, password]);

  return result;
}

const LoginModel = {
  login,
};

export default LoginModel;
