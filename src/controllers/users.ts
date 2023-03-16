import { Request, Response } from 'express';
import { createToken } from '../auth';
import UserService from '../services/users';

/**
 * @description - Add a new user to the database 
 */
async function addUser(req: Request, res: Response) {
  await UserService.addUser(req.body);
  const token = createToken(req.body);
  res.status(201).json({ token });
}

const UserController = {
  addUser,
};

export default UserController;