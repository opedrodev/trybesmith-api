import { IUser } from '../interfaces';
import UserModel from '../models/users';

async function addUser({ username, vocation, level, password }: IUser) {
  const user = await UserModel.addUser({ username, vocation, level, password });
  return user;
}

const UserService = {
  addUser,
};

export default UserService;