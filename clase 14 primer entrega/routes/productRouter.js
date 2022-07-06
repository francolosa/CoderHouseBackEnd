const express = require('express');
const { Router } = express;
const products = require('../containers/Products');
const router = Router();


router.get('/:id?', async (req, res) => {
    let data;
    req.params.id ? data = await products.getById(req.params.id) :
    data = await products.getAll();
    res.send(data);
})
router.post('/', async (req, res) => {
    await products.save(req.body);
    res.send('product posted')
})
router.put('/:id', async (req, res) => {
    //falta este
    res.send('product updated')
})
router.delete('/:id', async (req, res) => {
    await products.deleteById(req.params.id)
    res.send('product deleted')
})

module.exports = router;
