import express from "express";
import productsRouter from "./routes/products";
import cartRouter from "./routes/cart";

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
})

server.on("error", error => console.log(`Error en el servidor ${error}`))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);