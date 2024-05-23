import express from 'express'
import { GetInfo } from '../controllers/google.js';

const router = express.Router();

router.post('/info', GetInfo);

export default router;