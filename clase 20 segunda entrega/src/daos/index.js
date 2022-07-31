const CartFile = require('./cart/CartFile');
const CartFireBase = require('./cart/CartFireBase');
const CartMongo = require('./cart/CartMongo');

const ProductsFile = require('./products/ProductsFile');
const ProductsFireBase = require('./products/ProductsFireBase');
const ProductsMongo = require('./products/ProductsMongo');

const DATABASES = {
    file: {
        cartApi: new CartFile(),
        productsApi: new ProductsFile()
    },

    mongo: {
        cartApi: new CartMongo(),
        productsApi: new ProductsMongo()
    },

    firebase: {
        cartApi: new CartFireBase(),
        productsApi: new ProductsFireBase()
    }

}

const DB = process.env.SELECTED_DB 

const { cartApi, productsApi } = DATABASES[DB]

module.exports = { cartApi, productsApi }