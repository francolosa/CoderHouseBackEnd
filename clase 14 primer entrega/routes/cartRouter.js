const express = require('express');
const { Router } = express;
const router = Router();
const cart = require('../containers/Cart');

router.post('/', async (req, res) => {
    let response = await cart.createCart();
    res.send(response)
})
router.delete('/:id', async (req, res) => {
    let response = await cart.deleteById(req.params.id);
    res.send(response);
})
router.get('/:id/products', async (req, res) => {
    let data = await cart.getById(req.params.id);
    res.send(data)
})
router.post('/:id/products', async (req, res) => {
    let response = await cart.addToCart(req.params.id, req.body.productId)
    res.send(response)
})
router.delete('/:id/productos/:id_prod', async (req, res) => {
    
    res.send('product deleted from cart')
})

module.exports = router;