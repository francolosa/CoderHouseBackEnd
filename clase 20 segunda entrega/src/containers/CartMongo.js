const mongoose = require('../database/config/mongo/mongoose')
const { Cart } = require('../database/config/mongo/models/cart')
const { Product } = require('../database/config/mongo/models/products')

class CartMongoContainer {
    constructor(collectionName) {
        this.collection = collectionName
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

    //      GET CART (PRODUCTS)     //
    async getById(id) {
        let response = await Cart.findById(id)
        return response.products;
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

//const cartMongoContainer = new CartMongoContainer('cart')
module.exports = CartMongoContainer