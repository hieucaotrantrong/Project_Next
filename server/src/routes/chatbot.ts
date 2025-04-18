import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
/*----------------------------------
-----------------------------------*/
router.post('/chat', async (req, res) => {
    try {
        const { prompt } = req.body;

        const result = await ai.models.generateContent({
            model: 'gemini-1.5-pro',
            contents: prompt,
        });

        res.json({ text: result.text });
    } catch (error) {
        console.error('Gemini API error:', error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown Gemini error' });
    }
});

export default router;
