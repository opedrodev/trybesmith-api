import { number, object, string } from 'yup';

const userValidationSchema = object({
  username: string()
    .typeError({ status: 422, message: '"username" must be a string' })
    .min(3, { status: 422, message: '"username" length must be at least 3 characters long' })
    .required({ status: 400, message: '"username" is required' }),
  vocation: string()
    .typeError({ status: 422, message: '"vocation" must be a string' })
    .min(3, { status: 422, message: '"vocation" length must be at least 3 characters long' })
    .required({ status: 400, message: '"vocation" is required' }),
  level: number()
    .typeError({ status: 422, message: '"level" must be a number' })
    .min(1, { status: 422, message: '"level" must be greater than or equal to 1' })
    .required({ status: 400, message: '"level" is required' }),
  password: string()
    .typeError({ status: 422, message: '"password" must be a string' })
    .min(8, { status: 422, message: '"password" length must be at least 8 characters long' })
    .required({ status: 400, message: '"password" is required' }),
});

export default userValidationSchema;