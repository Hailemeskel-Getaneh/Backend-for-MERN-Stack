import express from 'express';
import { requestReset, resetPassword } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/reset-password-request', requestReset);
router.post('/reset-password/:token', resetPassword);

export default router;
