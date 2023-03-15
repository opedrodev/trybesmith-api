import { object, string } from 'yup';

const productValidationSchema = object({
  name: string()
    .typeError({ status: 422, message: '"name" must be a string' })
    .min(3, { status: 422, message: '"name" length must be at least 3 characters long' })
    .required({ status: 400, message: '"name" is required' }),
  amount: string()
    .typeError({ status: 422, message: '"amount" must be a string' })
    .min(3, { status: 422, message: '"amount" length must be at least 3 characters long' })
    .required({ status: 400, message: '"amount" is required' }),
});

export default productValidationSchema;
