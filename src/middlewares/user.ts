import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';
import { IError } from '../interfaces';
import userValidationSchema from '../validations/userValidationSchema';

async function validate(req: Request, res: Response, next: NextFunction) {
  try {
    await userValidationSchema.validate(req.body);
    next();
  } catch (error) {
    if (error instanceof ValidationError) {
      const { status, message } = error.message as unknown as IError;
      res.status(status).json({ message });
    }
  }
}

const UserMiddleware = {
  validate,
};

export default UserMiddleware;