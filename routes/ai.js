import express from 'express'
import { Gpt4 } from '../controllers/gtp.js';
// import { authenticateToken } from '../middlewares/auth';

const router = express.Router();

router.post('/text', Gpt4);

export default router;