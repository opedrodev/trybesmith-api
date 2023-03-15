import express from 'express';
import UserController from '../controllers/users';
import UserMiddleware from '../middlewares/user';

const router = express.Router();

router.post('/', UserMiddleware.user, UserController.addUser);

export default router;