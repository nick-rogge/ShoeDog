import { Request, Response } from 'express';
import { db } from '../../db/index';
import { productsTable } from '../../db/productSchema';

export function listProducts(req: Request, res: Response) {
    res.send('listProducts');
}

export function getProductById(req: Request, res: Response) {
    res.send('GetProductById');
}

export async function createProduct(req: Request, res: Response){
    console.log(req.body);
    
    await db.insert(productsTable).values(req.body);
    
    res.status(201).json('product');
}

export function updateProduct(req: Request, res: Response){
    res.send('updateProduct');
}

export function deleteProduct(req: Request, res: Response){
    res.send('deleteProduct');
}
