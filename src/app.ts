import express from 'express';

import loginRoutes from './routes/login.routes';
import ordersRouter from './routes/orders.routes';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';

const app = express();
app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRouter);
app.use('/login', loginRoutes);

export default app;
