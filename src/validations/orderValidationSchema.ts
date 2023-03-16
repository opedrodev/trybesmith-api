import { array, number, object } from 'yup';

const orderValidationSchema = object({
  productsIds: array()
    .of(number()
      .typeError({ status: 422, message: '"productsIds" must include only numbers' })
      .positive()
      .required())
    .required({ status: 400, message: '"productsIds" is required' })
    .min(1, { status: 422, message: '"productsIds" must include only numbers' })
    .typeError({ status: 422, message: '"productsIds" must be an array' }),
});

export default orderValidationSchema;