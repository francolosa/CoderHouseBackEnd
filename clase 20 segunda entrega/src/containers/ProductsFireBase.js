const admin = require("firebase-admin");
const serviceAccount = require('../db/coder-back-end-b371c-firebase-adminsdk-9kxtk-019486b5ef.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();
const products = db.collection('products')

class ProductsMongo {
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
        console.log(response);
        return this.getById(doc().id);
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

const productsMongo = new ProductsMongo('products')
module.exports = productsMongo