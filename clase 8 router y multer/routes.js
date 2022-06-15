const express = require('express');
const { Router } = express;
const productos = require('./contenedor.js');
//const multer = require('multer');
const router = Router();



/*
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.fieldname)
    }
})

const upload = multer({storage: storage})
*/

router.get('/', async (req, res) => {
    const products = await productos.getAll();
    res.json(products);
    
});

router.get('/:id', async (req, res) => {
    const product = await productos.getById(req.params.id);
    res.json(product);
});

router.post('/', async (req, res) => {
    const { title, price, thumbnail } = req.body
    const newProduct = await productos.save(title, price)    
    const product = await productos.getById(newProduct)
    res.json(product)
})

router.put('/:id', async (req, res) => {
    const productDelete = await productos.deleteById(req.body.id)
    res.json('put ok')
})

router.delete('/:id', async (req, res) => {
    const productDelete = await productos.deleteById(req.body.id)
    res.json('delete ok')
})

module.exports = router;