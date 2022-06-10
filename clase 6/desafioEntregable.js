import express from 'express';
import { productos } from './contenedor.js'

const app = express()

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
const products = await productos.getAll();

app.get('/productos', (req, res) => {
    res.send({ msg: products })
})

app.get('/productoRandom', (req, res) => {
    res.send({ msg: products[Math.floor(Math.random()*products.length)] })
})

