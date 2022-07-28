const express = require('express');
const { Router } = express;
const productsFireBase = require('../containers/ProductsFirebase');
const { isAdmin } = require('../middlewares/isAdmin')
const router = Router();

//      GET ONE/ALL PRODUCTS        //
router.get('/:id?', async (req, res) => {
    req.params.id ? response = await productsFireBase.getById(req.params.id) :
    response = await productsFireBase.getAll();
    res.send(response)
})

//      CREATE PRODUCT      //
router.post('/', isAdmin, async (req, res) => {
    let response = await productsFireBase.create(req.body);
    res.send(response)
})

//      UPDATE PRODUCT      //
router.put('/:id', isAdmin, async (req, res) => {
    let response = await productsFireBase.upDate(req.params.id, req.body)
    res.send(response)
})

//      DELETE PRODUCT      //
router.delete('/:id', isAdmin, async (req, res) => {
    let response = await productsFireBase.delete(req.params.id)
    res.send(response)
})

module.exports = router;