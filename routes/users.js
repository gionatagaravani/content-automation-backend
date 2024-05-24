import express from 'express';
import { insertUsers, getAllUsers, getUserById, deleteUser, updateUser, uploadImage } from '../controllers/users.js';
import { authenticateToken } from '../middlewares/auth.js';
import { upload } from '../config.js';

const router = express.Router();

router.get('/', authenticateToken, getAllUsers);

router.get('/:id', authenticateToken, getUserById);

router.delete('/:id', authenticateToken, deleteUser);

router.post('/', authenticateToken, insertUsers);

router.patch('/:id', authenticateToken, updateUser);

router.post('/upload-image', authenticateToken, upload.single("file"), uploadImage);


export default router;
