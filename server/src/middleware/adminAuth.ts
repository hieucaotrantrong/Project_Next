import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel';

export const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Không có token xác thực' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: number };
        const user = await UserModel.findById(decoded.userId);

        if (!user || user.role !== 'admin') {
            return res.status(403).json({ error: 'Không có quyền truy cập' });
        }

        next();
    } catch (error) {
        res.status(401).json({ error: 'Token không hợp lệ' });
    }
};
