import { Request, Response } from 'express';
import pool from "../config/database";
import { RowDataPacket } from 'mysql2';

interface OrderRow extends RowDataPacket {
    id: number;
    email: string;
    product_title: string;
    status: string;
}

export const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const { fullName, email, phone, address, productId, productTitle, productPrice } = req.body;

        if (!fullName || !email || !phone || !address || !productId || !productTitle || !productPrice) {
            res.status(400).json({ error: "Thiếu thông tin đơn hàng" });
            return;
        }

        await pool.execute(
            "INSERT INTO orders (full_name, email, phone, address, product_id, product_title, product_price, status) VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')",
            [fullName, email, phone, address, productId, productTitle, productPrice]
        );

        res.status(200).json({ message: "Đặt hàng thành công" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Lỗi server" });
    }
};

export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const [orders] = await pool.execute<OrderRow[]>('SELECT * FROM orders ORDER BY created_at DESC');
        res.json(orders);
    } catch (error) {
        console.error('Lỗi khi lấy danh sách đơn hàng:', error);
        res.status(500).json({ error: 'Lỗi server' });
    }
};

export const updateOrderStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        console.log('Request received:', { 
            id, 
            status, 
            headers: req.headers,
            body: req.body 
        });

        // Validate status
        const validStatuses = ['pending', 'confirmed', 'shipping', 'completed', 'cancelled'];
        if (!validStatuses.includes(status)) {
            res.status(400).json({ error: 'Trạng thái không hợp lệ' });
            return;
        }

        // Kiểm tra đơn hàng tồn tại và lấy thông tin
        const [orders] = await pool.execute<OrderRow[]>(
            'SELECT id, email, product_title FROM orders WHERE id = ?',
            [id]
        );

        if (!orders || orders.length === 0) {
            res.status(404).json({ error: 'Không tìm thấy đơn hàng' });
            return;
        }

        const order = orders[0];

        // Kiểm tra email tồn tại
        if (!order.email) {
            console.error('Email not found for order:', order);
            res.status(400).json({ error: 'Thiếu thông tin email trong đơn hàng' });
            return;
        }

        // Cập nhật trạng thái
        await pool.execute(
            'UPDATE orders SET status = ? WHERE id = ?',
            [status, id]
        );

        // Tạo thông báo
        await pool.execute(
            'INSERT INTO notifications (user_email, title, message, is_read) VALUES (?, ?, ?, FALSE)',
            [
                order.email,
                `Cập nhật đơn hàng: ${order.product_title}`,
                `Đơn hàng của bạn đã được cập nhật sang trạng thái: ${status}`
            ]
        );

        res.json({ 
            success: true,
            message: 'Cập nhật trạng thái thành công',
            order: {
                ...order,
                status
            }
        });
    } catch (error) {
        console.error('Lỗi khi cập nhật trạng thái đơn hàng:', error);
        res.status(500).json({ 
            error: 'Lỗi server',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};






