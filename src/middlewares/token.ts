import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../auth';

async function validate(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;
    
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    
    const token = verifyToken(authorization);
    req.body.token = token;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

const TokenMiddleware = {
  validate,
};

export default TokenMiddleware;