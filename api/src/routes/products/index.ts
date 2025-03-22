import {Router} from 'express';
import {listProducts, getProductById, createProduct, updateProduct, deleteProduct} from './productsController';
//products endpoint
const rounter = Router();

rounter.get('/', listProducts);
rounter.get('/:id', getProductById);
rounter.post('/', createProduct);
rounter.put('/:id', updateProduct);
rounter.delete('/:id', deleteProduct);

export default rounter;