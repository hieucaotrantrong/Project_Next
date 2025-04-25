import { Router, Request, Response } from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import pool from '../config/database';

dotenv.config();
const router = Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface ChatRequest extends Request {
    body: {
        prompt: string;
    }
}

async function chatHandler(req: ChatRequest, res: Response): Promise<void> {
    try {
        const { prompt } = req.body;

        // Kiểm tra xem câu hỏi có phải đang tìm sản phẩm không
        const isProductQuery = prompt.toLowerCase().includes('có') &&
            (prompt.toLowerCase().includes('không') || prompt.toLowerCase().includes('ko'));

        if (isProductQuery) {
            // Lấy các từ khóa sản phẩm từ câu hỏi
            const keywords = prompt.toLowerCase()
                .replace(/có|không|ko|những|các|sản phẩm|hay|là/g, '')
                .trim()
                .split(' ')
                .filter(word => word.length > 1);

            if (keywords.length > 0) {
                const searchQuery = keywords.map(() => 'LOWER(title) LIKE LOWER(?)').join(' OR ');
                const searchParams = keywords.map(term => `%${term}%`);

                const [products] = await pool.execute(
                    `SELECT * FROM products WHERE ${searchQuery}`,
                    searchParams
                );

                if (Array.isArray(products) && products.length > 0) {
                    let response = 'Có, chúng tôi có các sản phẩm sau:\n\n';
                    products.forEach((product: any, index) => {
                        response += `${index + 1}. ${product.title}\n`;
                        response += `   - Giá gốc: ${product.originalPrice}đ\n`;
                        response += `   - Giá khuyến mãi: ${product.price}đ\n`;
                        response += `   - Giảm giá: ${product.discount}%\n`;
                        if (product.tag) response += `   - Tag: ${product.tag}\n`;
                        response += `   - Hình ảnh: ${product.image}\n`;
                        response += '\n';
                    });
                    res.json({ text: response });
                    return;
                } else {
                    res.json({ text: `Xin lỗi, hiện tại chúng tôi không có sản phẩm ${keywords.join(' ')} trong kho.` });
                    return;
                }
            }
        }

        // Nếu không phải câu hỏi về sản phẩm, sử dụng Gemini AI
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        res.json({ text: response.text() });

    } catch (error) {
        console.error('Chatbot error:', error);
        res.status(500).json({
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}

router.post('/chat', chatHandler);

export default router;






