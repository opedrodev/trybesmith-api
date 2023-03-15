import { object, string } from 'yup';

const loginValidationSchema = object({
  username: string().required({ status: 400, message: '"username" is required' }),
  password: string().required({ status: 400, message: '"password" is required' }),
});

export default loginValidationSchema;