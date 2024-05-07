import express from 'express';
import { insertUsers, getAllUsers, getUserById, deleteUser, updateUser } from '../controllers/users.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', authenticateToken, getAllUsers);

router.get('/:id', authenticateToken, getUserById);

router.delete('/:id', authenticateToken, deleteUser);

router.post('/', authenticateToken, insertUsers);

router.patch('/:id', authenticateToken, updateUser);

export default router;
