const express = require('express');
const { Router } = express;
const router = Router();
const cartMongo = require('../containers/CartMongo');

//      GET CART (PRODUCTS)     //
router.get('/:id/products',  async (req, res) => {
    let data = await cartMongo.getById(req.params.id);
    res.send(data)
})

//      CREATE CART     //
router.post('/', async (req, res) => {
    let response = await cartMongo.createCart();
    res.send(response)
})

//      ADD TO CART     //
router.post('/:id/products/:id_prod', async (req, res) => {
    let response = await cartMongo.addToCart(req.params.id, req.params.id_prod, req.body.quantity)
    res.send(response)
})

//      DELETE (PRODUCT) FROM CART     //
router.delete('/:id/products/:id_prod', async (req, res) => {
    let response = await cartMongo.deleteFromCart(req.params.id, req.params.id_prod)
    res.send(response)
})

//      CLEAR CART     //
router.delete('/:id', async (req, res) => {
    let response = await cartMongo.clearCart(req.params.id);
    res.send(response);
})

module.exports = router;