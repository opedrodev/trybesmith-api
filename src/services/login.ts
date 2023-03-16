import { ILogin, IUser } from '../interfaces';
import LoginModel from '../models/login';

/**
 * @param {ILogin} - The username and password of the user
 * @returns {Promise<IUser>} - Returns the user 
 */
async function login({ username, password }: ILogin): Promise<IUser> {
  const result = await LoginModel.login({ username, password });
  return result;
}

const LoginService = {
  login,
};

export default LoginService;