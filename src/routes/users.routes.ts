import express from 'express';
import UserController from '../controllers/users';

const router = express.Router();

router.post('/', UserController.addUser);

export default router;