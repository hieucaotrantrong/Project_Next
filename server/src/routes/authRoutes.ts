import { Router } from 'express';
import authController from '../controllers/authController';

const router = Router();
router.post('/signup',
    (req, res, next) => {
        authController.signup(req, res, next).catch(next);
    }

);

export default router;