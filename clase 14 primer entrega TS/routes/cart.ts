import express from 'express';
const { Router } = express;
const router = Router();

router.post('/', async (req, res) => {
    res.send('cart created')
})
router.delete('/:id', async (req, res) => {
    res.send('cart empty/deleted')
})
router.get('/:id/products', async (req, res) => {
    res.send('products in cart list')
})
router.post('/:id/products', async (req, res) => {
    res.send('product added to cart')
})
router.delete('/:id/productos/:id_prod', async (req, res) => {
    res.send('product deleted from cart')
})

export default router;