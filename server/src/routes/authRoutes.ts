import { Router } from 'express';
import authController from '../controllers/authController';


const router = Router();

// Đăng ký
router.post('/signup', (req, res, next) => {
    authController.signup(req, res, next).catch(next);
});

// Đăng nhập
router.post('/login', (req, res, next) => {
    authController.login(req, res, next).catch(next);
});


export default router;
