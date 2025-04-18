import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

/*----------------------------------
-----------------------------------*/
app.use('/api/auth', authRoutes);

export default app;