import { Request, Response } from 'express';

export const getAllProducts = (req: Request, res: Response) => {
    res.json({ message: 'Danh sách sản phẩm' });
};
