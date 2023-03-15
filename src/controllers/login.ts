import { Request, Response } from 'express';
import { createToken } from '../auth';
import LoginService from '../services/login';

async function login(req: Request, res: Response) {
  const result = await LoginService.login(req.body);

  if (!result) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  const token = createToken(result);
  res.status(200).json({ token });
}

const LoginController = {
  login,
};

export default LoginController;