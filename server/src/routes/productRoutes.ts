import { Router } from 'express';
import { getAllProducts, createProduct, deleteProduct, updateProduct } from '../controllers/product.controller';

const router = Router();


router.get('/', getAllProducts);


router.post('/', createProduct);


router.delete('/:id', deleteProduct);
router.put('/products/:id', updateProduct);
export default router;
