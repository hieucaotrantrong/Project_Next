import { Router, Request, Response, NextFunction } from 'express';
import pool from '../config/database';
import { adminAuth } from '../middleware/adminAuth';
import { RowDataPacket, OkPacket } from 'mysql2';

const router = Router();

// Interface cho support request
interface SupportRequest extends RowDataPacket {
    id: number;
    name: string;
    email: string;
    topic: string;
    message: string;
    reply?: string;
    status: 'pending' | 'replied';
    created_at: Date;
    replied_at?: Date;
}

// Định nghĩa interface cho request handlers
interface TypedRequestHandler {
    (req: Request, res: Response, next: NextFunction): Promise<void>;
}

// Lấy tất cả yêu cầu hỗ trợ (cho admin)
const getAllRequests: TypedRequestHandler = async (_req, res) => {
    try {
        const [requests] = await pool.execute<SupportRequest[]>(
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

        // Lấy thông tin request
        const [requests] = await pool.execute<SupportRequest[]>(
            'SELECT email, topic FROM support_requests WHERE id = ?',
            [id]
        );
        
        if (requests.length === 0) {
            res.status(404).json({ error: 'Không tìm thấy yêu cầu hỗ trợ' });
            return;
        }

        const request = requests[0];

        // Cập nhật trạng thái support request
        await pool.execute(
            'UPDATE support_requests SET reply = ?, status = "replied", replied_at = NOW() WHERE id = ?',
            [reply, id]
        );

        // Tạo thông báo mới
        console.log('Creating notification for:', {
            email: request.email,
            topic: request.topic,
            reply: reply
        });

        await pool.execute(
            'INSERT INTO notifications (user_email, title, message, is_read) VALUES (?, ?, ?, FALSE)',
            [
                request.email,
                `Phản hồi cho yêu cầu: ${request.topic}`,
                reply
            ]
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

