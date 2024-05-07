import { Router } from 'express';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

const router = Router();

router.use('/users', userRoutes)
router.use('/auth', authRoutes)

export default router;