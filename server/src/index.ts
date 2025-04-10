import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.routes';
import { db } from './config/db';
/*------------------------------------

--------------------------------------*/
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/*------------------------------------
Routes
--------------------------------------*/
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


/*------------------------------------
Check database connection
--------------------------------------*/
db.getConnection()
    .then((connection) => {
        console.log('Connect succeed!');
    })
    .catch((err) => {
        console.log('Error connect', err);
    })