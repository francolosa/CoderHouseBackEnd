const admin = require("firebase-admin");
const db = admin.firestore();
const carts = db.collection('carts')
const productsDb = db.collection('products')

class ProductsMongo {
    constructor(collectionName) {
        this.collection = collectionName
    }
    //      GET CART (PRODUCTS)     //
    async getById(id) {
        let querySnapshot = await carts.doc(id).get()
        let doc = querySnapshot.data().products
        return doc;
    }

    //      CREATE CART      //
    async createCart(body) {
        let newCart = {
            products: []
        }
        let response = await carts.doc().create(newCart)
        console.log(response);
        return response;
    }

    //      ADD TO CART     //
    async addToCart(cartId, productId, quantity) {
        let products = await this.getById(cartId)
        let querySnapshot = await productsDb.doc(productId).get()
        let newProduct = querySnapshot.data()
        products.push({
            id: productId,
            name: newProduct.name,
            quantity: quantity
        })
        let response = await carts.doc(cartId).set({ products: products })
        return response;
    }

    //      DELETE (PRODUCT) FROM CART     //
    async deleteFromCart(id, id_prod) {
        let products = await this.getById(id)
        let newProducts = products.filter(product => product.id != id_prod)
        let response = await carts.doc(id).set({ products: newProducts })
        return response;
    }

    //      CLEAR CART     //
    async clearCart(id) {
        let response = await carts.doc(id).set({ products: [] })
        return response;
    }

}

const productsMongo = new ProductsMongo('products')
module.exports = productsMongo