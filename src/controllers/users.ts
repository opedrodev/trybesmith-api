import { Request, Response } from 'express';
import { createToken } from '../auth';
import UserService from '../services/users';

async function addUser(req: Request, res: Response) {
  try {
    await UserService.addUser(req.body);
    const token = createToken(req.body);
    res.status(201).json({ token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

const UserController = {
  addUser,
};

export default UserController;