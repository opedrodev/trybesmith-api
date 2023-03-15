import { ILogin, IUser } from '../interfaces';
import LoginModel from '../models/login';

async function login({ username, password }: ILogin): Promise<IUser> {
  const result = await LoginModel.login({ username, password });
  return result;
}

const LoginService = {
  login,
};

export default LoginService;