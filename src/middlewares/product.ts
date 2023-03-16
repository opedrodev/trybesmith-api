import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';
import { IError } from '../interfaces';
import productValidationSchema from '../validations/productValidationSchema';

async function validate(req: Request, res: Response, next: NextFunction) {
  try {
    await productValidationSchema.validate(req.body);
    next();
  } catch (error) {
    if (error instanceof ValidationError) {
      const { status, message } = error.message as unknown as IError;
      res.status(status).json({ message });
    }
  }
}

const ProductMiddleware = {
  validate,
};

export default ProductMiddleware;