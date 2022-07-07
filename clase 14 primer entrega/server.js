const express = require('express');

const productsRouter = require('./routes/productRouter');
const cartRouter = require('./routes/cartRouter');

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`server encendido escuchando en el puerto ${PORT}`);
})

server.on('error', error => console.log(error));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);