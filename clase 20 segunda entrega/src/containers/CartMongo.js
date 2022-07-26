const { Cart } = require('../database/models/cart')
const mongoose = require('mongoose')
const cart = require('./CartFile')
const { Product } = require('../database/models/products')

mongoose.connect("mongodb+srv://francolosa:francolosa@cluster0.02pc012.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

class CartMongo {
    constructor(collectionName) {
        this.collection = collectionName
    }

    //      GET CART (PRODUCTS)     //
    async getById(id) {
        let response = await Cart.findById(id)
        return response.products;
    }

    //      CREATE CART     //
    async createCart(body) {
        const newCart = new Cart(body)
        let response = await newCart.save()
        return response;
    }

    //      ADD TO CART     //
    async addToCart(cartId, productId, quantity) {
        let cart = await Cart.findById(cartId)
        let product = await Product.findById(productId)

        if (cart) {
            let itemIndex = cart.products.findIndex(item => item._id == productId)
            if (itemIndex > -1) {
                //      Añadir producto que ya existe dentro de un cart existente (actualizar cantidad)     //                
                let cartFilter = cart.products.filter(product => product._id != productId)
                let products = [
                    ...cartFilter,
                    {
                        _id: product._id,
                        code: product.code,
                        name: product.name,
                        quantity: quantity
                    }]
                await Cart.updateOne({ _id: cartId }, {
                    products: products
                })
                return cart
            } else {
                //      Añadir producto a un cart existente      //                
                let products = [
                    ...cart.products,
                    {
                        _id: product._id,
                        code: product.code,
                        name: product.name,
                        quantity: quantity
                    }]
                await Cart.updateOne({ _id: cartId }, {
                    products: products
                })
                return cart
            }
        }
        if (!cart) {
            //      Añadir producto a un cart inexistente (y crearlo)      //                
            let newCart = await this.createCart()
            console.log("Creando Cart y añadiendo el nuevo Producto");
            let newProduct = {
                _id: product._id,
                code: product.code,
                name: product.name,
                quantity: quantity
            }
            await Cart.updateOne({ _id: newCart._id }, {
                products: newProduct
            })
            console.log("asd");
            return newCart;
        }
    }

    //      DELETE (PRODUCT) FROM CART     //
    async deleteFromCart(cartId, productId) {
        let cart = await Cart.findById(cartId)
        let cartFilter = cart.products.filter(product => product._id != productId)
        let products = [...cartFilter]
        await Cart.updateOne({ _id: cartId }, {
            products: products
        })
        return cart;
    }

    //      CLEAR CART     //
    async clearCart(id) {
        let response = await Cart.deleteOne({ _id: id })
        return response;
    }

}

const cartMongo = new CartMongo('cart')
module.exports = cartMongo