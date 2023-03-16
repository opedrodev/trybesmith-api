import { IUser } from '../interfaces';
import UserModel from '../models/users';

/**
 * @param {IUser} user - The user to be added
 * @returns {Promise<IUser>} - Returns the user added 
 */
async function addUser({ username, vocation, level, password }: IUser): Promise<IUser> {
  const user = await UserModel.addUser({ username, vocation, level, password });
  return user;
}

const UserService = {
  addUser,
};

export default UserService;