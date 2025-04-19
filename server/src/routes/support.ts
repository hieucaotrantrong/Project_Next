import { Router, Request, Response, NextFunction } from 'express';
import pool from '../config/database';

const router = Router();

/*----------------------------------
-----------------------------------*/
const supportHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { name, email, topic, message } = req.body;

        /*----------------------------------
        -----------------------------------*/
        if (!name || !email || !topic || !message) {
            res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin.' });
            return;
        }

        // Thực thi câu truy vấn SQL để lưu thông tin vào cơ sở dữ liệu
        await pool.execute(
            'INSERT INTO support_requests (name, email, topic, message) VALUES (?, ?, ?, ?)',
            [name, email, topic, message]
        );

        /*----------------------------------
        -----------------------------------*/
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Lỗi cơ sở dữ liệu:', error);
        next(error);
    }
};

/*----------------------------------
-----------------------------------*/
router.post('/', supportHandler);

export default router;
