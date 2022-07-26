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
        const querySnapshot = await products.get()
        let docs = querySnapshot.docs;
        return docs;
    }

    //      GET ONE     //
    async getById(id) {
        let querySnapshot = await products.get(id)
        let doc = querySnapshot.doc
        return doc;
    }

    //      CREATE PRODUCT      //
    async create(body) {
        return response;
    }

    //      UPDATE PRODUCT      //
    async upDate(id, body) {
        let doc = producs.doc(id)
        let item = await doc.update({})
        return response;
    }

    //      DELETE PRODUCT      //
    async delete(id) {
        let response = await doc.delete(id)
        return response;
    }
}

const productsMongo = new ProductsMongo('products')
module.exports = productsMongo

