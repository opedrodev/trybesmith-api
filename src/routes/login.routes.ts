import express from 'express';
import LoginController from '../controllers/login';
import LoginMiddleware from '../middlewares/login';

const router = express.Router();

router.post('/', LoginMiddleware.login, LoginController.login);

export default router;