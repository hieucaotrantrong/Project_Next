import { Request, Response } from 'express';
import pool from "../config/database";

export const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const { fullName, phone, address, productId, productTitle, productPrice } = req.body;

        if (!fullName || !phone || !address || !productId || !productTitle || !productPrice) {
            res.status(400).json({ error: "Thiếu thông tin đơn hàng" });
            return;
        }

        /*----------------------------------
        Save information for db
        -----------------------------------*/
        await pool.execute(
            "INSERT INTO orders (full_name, phone, address, product_id, product_title, product_price) VALUES (?, ?, ?, ?, ?, ?)",
            [fullName, phone, address, productId, productTitle, productPrice]
        );

        res.status(200).json({ message: "Đặt hàng thành công" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Lỗi server" });
    }
};
