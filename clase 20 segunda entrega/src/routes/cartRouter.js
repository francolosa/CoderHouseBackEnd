const express = require('express');
const { Router } = express;
const router = Router();
const { cartApi } = require('../daos/index');

//      CREATE CART     //
router.post('/', async (req, res) => {
    let response = await cartApi.createCart();
    res.send(response)
})

//      ADD TO CART     //
router.post('/:id/products/:id_prod', async (req, res) => {
    let response = await cartApi.addToCart(req.params.id, req.params.id_prod, req.body.quantity)
    res.send(response)
})

//      GET CART (PRODUCTS)     //
router.get('/:id/products',  async (req, res) => {
    let data = await cartApi.getById(req.params.id);
    res.send(data)
})

//      DELETE (PRODUCT) FROM CART     //
router.delete('/:id/products/:id_prod', async (req, res) => {
    let response = await cartApi.deleteFromCart(req.params.id, req.params.id_prod)
    res.send(response)
})

//      CLEAR CART     //
router.delete('/:id', async (req, res) => {
    let response = await cartApi.clearCart(req.params.id);
    res.send(response);
})

module.exports = router;