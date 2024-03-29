import { CarritoArchivo } from "./carrito/CarritoArchivo.js";
import { CarritoMongo } from "./carrito/CarritoMongo.js";
import { ProductoArchivo } from "./productos/ProductoArchivo.js";
import { ProductoMongo } from "./productos/ProductoMongo.js";

const DATABASES = {
    mongo: {
        carritoApi: new CarritoMongo(),
        productosApi: new ProductoMongo()
    },
    archivo: {
        carritoApi: new CarritoArchivo(),
        productosApi: new ProductoArchivo()
    }
}

const DB = process.env.SELECTED_DB || 'mongo'

const {carritoApi, productosApi} = DATABASES[DB]

export {carritoApi, productosApi}