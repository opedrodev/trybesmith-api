import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';
import { IError } from '../interfaces';
import orderValidationSchema from '../validations/orderValidationSchema';

async function validate(req: Request, res: Response, next: NextFunction) {
  try {
    await orderValidationSchema.validate(req.body);
    next();
  } catch (error) {
    if (error instanceof ValidationError) {
      const { status, message } = error.message as unknown as IError;
      res.status(status).json({ message });
    }
  }
}

const OrderMiddleware = {
  validate,
};

export default OrderMiddleware;