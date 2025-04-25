import { Router, Request, Response, NextFunction } from 'express';
import pool from '../config/database';
import { adminAuth } from '../middleware/adminAuth';

const router = Router();

// Định nghĩa interface cho request handlers
interface TypedRequestHandler {
    (req: Request, res: Response, next: NextFunction): Promise<void>;
}

// Lấy tất cả yêu cầu hỗ trợ (cho admin)
const getAllRequests: TypedRequestHandler = async (_req, res) => {
    try {
        const [requests] = await pool.execute(
            'SELECT * FROM support_requests ORDER BY created_at DESC'
        );
        res.json(requests);
    } catch (error) {
        console.error('Lỗi khi lấy danh sách hỗ trợ:', error);
        res.status(500).json({ error: 'Lỗi server' });
    }
};

// Gửi phản hồi cho yêu cầu hỗ trợ
const replyToRequest: TypedRequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { reply } = req.body;

        if (!reply) {
            res.status(400).json({ error: 'Vui lòng nhập nội dung phản hồi' });
            return;
        }

        await pool.execute(
            'UPDATE support_requests SET reply = ?, status = "replied", replied_at = NOW() WHERE id = ?',
            [reply, id]
        );

        res.json({ success: true });
    } catch (error) {
        console.error('Lỗi khi phản hồi:', error);
        res.status(500).json({ error: 'Lỗi server' });
    }
};

// Tạo yêu cầu hỗ trợ mới
const createRequest: TypedRequestHandler = async (req, res) => {
    try {
        const { name, email, topic, message } = req.body;

        if (!name || !email || !topic || !message) {
            res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin.' });
            return;
        }

        await pool.execute(
            'INSERT INTO support_requests (name, email, topic, message) VALUES (?, ?, ?, ?)',
            [name, email, topic, message]
        );

        res.status(201).json({ success: true });
    } catch (error) {
        console.error('Lỗi khi tạo yêu cầu hỗ trợ:', error);
        res.status(500).json({ error: 'Lỗi server' });
    }
};

// Đăng ký routes
router.get('/', adminAuth, getAllRequests);
router.post('/:id/reply', adminAuth, replyToRequest);
router.post('/', createRequest);

export default router;


