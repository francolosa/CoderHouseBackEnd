const admin = require('../database/config/firebase/fireBase')
const db = admin.firestore();
const products = db.collection('products')

class ProductsFireBaseContainer {
    constructor(collectionName) {
        this.collection = collectionName
    }
    //      GET ALL     //
    async getAll() {
        console.log("get all");
        const querySnapshot = await products.get()
        let docs = querySnapshot.docs.map(doc=>doc.data())
        return docs;
    }

    //      GET ONE     //
    async getById(id) {
        let querySnapshot = await products.doc(id).get()
        let doc = querySnapshot.data()
        return doc;
    }

    //      CREATE PRODUCT      //
    async create(body) {
        let newProduct = {
            ...body
        }
        let response = await products.doc().create(newProduct)
        console.log(response.id);
    //    return response;
    }

    //      UPDATE PRODUCT      //
    async upDate(id, body) {
        let newProductData = {
            ...body
        }
        let response = await products.doc(id).set(newProductData)
        console.log(response);
        return this.getById(id);
    }

    //      DELETE PRODUCT      //
    async delete(id) {
        let response = await products.doc(id).delete()
        console.log(response);
        return response;
    }
}

//const productsMongoContainer = new ProductsMongoContainer('products')
module.exports = ProductsFireBaseContainer