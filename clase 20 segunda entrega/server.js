require('dotenv').config()
const express = require('express');
const productsRouter = require('./src/routes/productRouter');
const cartRouter = require('./src/routes/cartRouter');

const app = express();
const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
    console.log(`server encendido escuchando en el puerto ${PORT}`);
})

server.on('error', error => console.log(error));



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);
app.use('*', (req, res) => {
    const {method, baseUrl} = req

    res.json({error: -2, ruta: baseUrl, metodo: method})
})