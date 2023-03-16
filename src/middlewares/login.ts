import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';
import { IError } from '../interfaces';
import loginValidationSchema from '../validations/loginValidationSchema';

async function validate(req: Request, res: Response, next: NextFunction) {
  try {
    await loginValidationSchema.validate(req.body);
    next();
  } catch (error) {
    if (error instanceof ValidationError) {
      const { message, status } = error.message as unknown as IError;
      res.status(status).json({ message });
    }
  }
}

const LoginMiddleware = {
  validate,
};

export default LoginMiddleware;
