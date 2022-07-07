const fs = require('fs');

class Cart {
    constructor(fileName) {
        this.fileName = fileName;
        this.route = `./data/${fileName}.txt`
        this.encode = 'utf-8'
    }
    async createCart() {
        let cartsSTRING = await fs.promises.readFile(this.route, this.encode);
        let cartsPARSE = await JSON.parse(cartsSTRING)
        let cartId = cartsPARSE[cartsPARSE.length - 1].cartId + 1
        let newCart = {
            cartId: cartId,
            products: []
        }
        let newCarts = [...cartsPARSE, newCart]
        console.log(newCarts);
        let newCartsSTRING = JSON.stringify(newCarts, this.encode)
        await fs.promises.writeFile(this.route, newCartsSTRING)
        return newCartsSTRING
    }
    async addToCart(cartId, productId) {
        try {
            //trayendo el producto por su Id
            let productsSTRING = await fs.promises.readFile("./data/products.txt", this.encode);
            let productsPARSE = await JSON.parse(productsSTRING)
            let productFind = productsPARSE.find((product) => {
                return product.id == productId
            })
            //trayendo el cart por su Id
            let cartsSTRING = await fs.promises.readFile(this.route, this.encode);
            let cartsPARSE = await JSON.parse(cartsSTRING)
            let cartFind = cartsPARSE.find((cart) => {
                return cart.cartId == cartId
            })
            //trayendo los carts sin el cart a actualizar (ya que se sobreescribe) 
            let cartsFilter = cartsPARSE.filter((cart) => {
                return cart.cartId != cartId
            })

            let newCarts = [
                ...cartsFilter,
                {
                    cartId: cartFind.cartId,
                    products: [...cartFind.products, { ...productFind }]
                }
            ]

            await fs.promises.writeFile(this.route, JSON.stringify(newCarts))
            return (newCarts);
        } catch (error) { console.log(error); }
    }
    async getById(cartId) {
        try {
            let cartSTRING = await fs.promises.readFile(this.route, this.encode);
            let cartPARSE = await JSON.parse(cartSTRING)
            let cartFind = cartPARSE.find((cart) => {
                return cart.cartId == cartId
            });
            let cartFindJSON = JSON.stringify(cartFind)
            return cartFindJSON;
        } catch (error) {
            console.log(error)
        }
    }
    async deleteCartById(cartId) {
        try {
            let cartSTRING = await fs.promises.readFile(this.route, this.encode);
            let cartPARSE = await JSON.parse(cartSTRING)
            let cartUpdate = await cartPARSE.filter(cart => {
                return cart.cartId != cartId
            })
            let cartUpdateSTRING = JSON.stringify(cartUpdate)
            await fs.promises.writeFile(this.route, cartUpdateSTRING)
            console.log(`Se eliminó correctamente el item con id: ${cartId}`)
        } catch (error) {
            console.log(error)
        }

    }
    async deleteFromCart(cartId, productId) {
        try {
            let cartsSTRING = await fs.promises.readFile(this.route, this.encode);
            let cartsPARSE = await JSON.parse(cartsSTRING)
            let cartFind = cartsPARSE.find((cart) => {
                return cart.cartId == cartId
            });
            let cartsFilter = cartsPARSE.filter((cart) => {
                return cart.cartId != cartId
            })
            let productsFilter = cartFind.products.filter(product => {
                return product.id != productId
            })
            let newCarts = [
                ...cartsFilter,
                {
                    cartId: cartFind.cartId,
                    products: [...productsFilter ]
                }
            ]
            
            await fs.promises.writeFile(this.route, JSON.stringify(newCarts))
            return newCarts
        } catch (error) {
            console.log(error)
        }
    }
}
const cart = new Cart('cart')
module.exports = cart
