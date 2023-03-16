import express from 'express';
import LoginController from '../controllers/login';
import LoginMiddleware from '../middlewares/login';

const router = express.Router();

router.post('/', LoginMiddleware.validate, LoginController.login);

export default router;