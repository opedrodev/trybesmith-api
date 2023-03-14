import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';

dotenv.config();

export function createToken(user: IUser) {
  const { password, ...data } = user;
  const token = jwt.sign(data, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
  return token;
}

export function verifyToken(token: string) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
  return decoded;
}