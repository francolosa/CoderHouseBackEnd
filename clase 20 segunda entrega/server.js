const express = require('express');
const productsRouter = require('./src/routes/productRouterFireBase');
const cartRouter = require('./src/routes/cartRouterFireBase');

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