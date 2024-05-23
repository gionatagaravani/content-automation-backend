import { Router } from 'express';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import aiRoutes from './routes/ai.js';
import googleRoutes from './routes/google.js';

const router = Router();

router.use('/users', userRoutes)
router.use('/auth', authRoutes)
router.use('/ai', aiRoutes)
router.use('/google', googleRoutes)

export default router;