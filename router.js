import { Router } from 'express';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import aiRoutes from './routes/ai.js';

const router = Router();

router.use('/users', userRoutes)
router.use('/auth', authRoutes)
router.use('/ai', aiRoutes)

export default router;