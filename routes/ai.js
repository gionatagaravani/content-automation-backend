import express from 'express'
import { Gpt4 } from '../controllers/gtp';
import { authenticateToken } from '../middlewares/auth';

const router = express.Router();

router.post('/text', authenticateToken, Gpt4);

export default router;