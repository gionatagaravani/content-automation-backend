import express from 'express'
import { login, register, registerLog } from '../controllers/auth.js'

const router = express.Router();

router.post('/register', register);
router.post('/registerlogin', registerLog);
router.post('/login', login);

export default router;