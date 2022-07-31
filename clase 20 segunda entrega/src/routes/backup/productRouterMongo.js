const express = require('express');
const { Router } = express;
const productsMongo = require('../containers/ProductsMongo');
const { isAdmin } = require('../middlewares/isAdmin')
const router = Router();

//      GET ONE/ALL PRODUCTS        //
router.get('/:id?', async (req, res) => {
    req.params.id ? response = await productsMongo.getById(req.params.id) :
    response = await productsMongo.getAll();
    res.send(response)
})

//      CREATE PRODUCT      //
router.post('/', isAdmin, async (req, res) => {
    let response = await productsMongo.create(req.body);
    res.send(response)
})

//      UPDATE PRODUCT      //
router.put('/:id', isAdmin, async (req, res) => {
    let response = await productsMongo.upDate(req.params.id, req.body)
    res.send(response)
})

//      DELETE PRODUCT      //
router.delete('/:id', isAdmin, async (req, res) => {
    let response = await productsMongo.delete(req.params.id)
    res.send(response)
})

module.exports = router;
