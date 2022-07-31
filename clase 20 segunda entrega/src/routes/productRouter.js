const express = require('express');
const { Router } = express;
const { productsApi } = require('../daos/index');
const { isAdmin } = require('../middlewares/isAdmin')
const router = Router();

//      GET ONE/ALL PRODUCTS        //
router.get('/:id?', async (req, res) => {
    req.params.id ? response = await productsApi.getById(req.params.id) :
    response = await productsApi.getAll();
    res.send(response)
})

//      CREATE PRODUCT      //
router.post('/', isAdmin, async (req, res) => {
    let response = await productsApi.create(req.body);
    res.send(response)
})

//      UPDATE PRODUCT      //
router.put('/:id', isAdmin, async (req, res) => {
    let response = await productsApi.upDate(req.params.id, req.body)
    res.send(response)
})

//      DELETE PRODUCT      //
router.delete('/:id', isAdmin, async (req, res) => {
    let response = await productsApi.delete(req.params.id)
    res.send(response)
})

module.exports = router;