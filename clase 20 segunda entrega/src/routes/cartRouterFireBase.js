const express = require('express');
const { Router } = express;
const router = Router();
const cartFireBase = require('../containers/CartFirebase');

//      GET CART (PRODUCTS)     //
router.get('/:id/products',  async (req, res) => {
    let data = await cartFireBase.getById(req.params.id);
    res.send(data)
})

//      CREATE CART     //
router.post('/', async (req, res) => {
    let response = await cartFireBase.createCart(req.body);
    res.send(response)
})

//      ADD TO CART     //
router.post('/:id/products/:id_prod', async (req, res) => {
    let response = await cartFireBase.addToCart(req.params.id, req.params.id_prod, req.body.quantity)
    res.send(response)
})

//      DELETE (PRODUCT) FROM CART     //
router.delete('/:id/products/:id_prod', async (req, res) => {
    let response = await cartFireBase.deleteFromCart(req.params.id, req.params.id_prod)
    res.send(response)
})

//      CLEAR CART     //
router.delete('/:id', async (req, res) => {
    let response = await cartFireBase.clearCart(req.params.id);
    res.send(response);
})

module.exports = router;