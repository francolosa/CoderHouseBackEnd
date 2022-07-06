import express from 'express';
import Product from '../data/Product'
import products from '../contenedor'

const { Router } = express;
const router = Router();

router.get('/:id?', async (req, res) => {
    res.send('products list / product')
})
router.post('/', async (req, res) => {
    res.send('product posted')
})
router.put('/:id?', async (req, res) => {
    res.send('product updated')
})
router.delete('/:id?', async (req, res) => {
    res.send('product deleted')
})

export default router;
