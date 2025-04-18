import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import database from './config/database';
import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';
import chatbot from './routes/chatbot';
import orderRoutes from "./routes/order.routes";
/*------------------------------------
Cấu hình môi trường
--------------------------------------*/
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/*------------------------------------
Middleware
--------------------------------------*/
app.use(cors());
app.use(express.json());

/*------------------------------------
Routes
--------------------------------------*/
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/chatbot', chatbot);
app.use('/api/orders', orderRoutes);

/*------------------------------------
Khởi động server
--------------------------------------*/
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

/*------------------------------------
Kiểm tra kết nối database
--------------------------------------*/
database.getConnection()
    .then((connection) => {
        console.log('Database connected successfully!');
        connection.release();
    })
    .catch((err) => {
        console.error('Database connection failed:', err);
    });