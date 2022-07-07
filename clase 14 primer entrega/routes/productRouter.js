const express = require('express');
const { Router } = express;
const products = require('../containers/Products');
const router = Router();

const isAdmin = (req,res,next) => {
    let admin = true;
    if(admin){
        next()
    } else {
        res.send(`error, ruta o metodo no autorizado`)
    }
}
router.get('/:id?', async (req, res) => {
    let data;
    req.params.id ? data = await products.getById(req.params.id) :
    data = await products.getAll();
    res.send(data);
})
router.post('/', isAdmin, async (req, res) => {
    await products.save(req.body);
    res.send('product posted')
})
router.put('/:id', isAdmin, async (req, res) => {
    //falta este
    res.send('product updated')
})
router.delete('/:id', isAdmin, async (req, res) => {
    await products.deleteById(req.params.id)
    res.send('product deleted')
})

module.exports = router;
