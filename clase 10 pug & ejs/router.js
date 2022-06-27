const express = require('express');
const { Router } = express;
const productos = require('./contenedor.js');
const router = Router();


router.get('/productos', async (req, res) => {
    const products = await productos.getAll();
    res.render('products', {products});
});

router.post('/productos', async (req, res) => {
    await productos.save(req.body.title, req.body.price, req.body.thumbnail);
    const products = await productos.getAll();
    res.render('products', {products});
});

module.exports = router;