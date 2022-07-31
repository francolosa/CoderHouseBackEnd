const { Product } = require('../database/config/mongo/models/products')
const mongoose = require('../database/config/mongo/mongoose')

class ProductsMongoContainer {
    constructor(collectionName) {
        this.collection = collectionName
    }
    //      GET ALL     //
    async getAll() {
        let response = await Product.find()
        return response;
    }

    //      GET ONE     //
    async getById(id) {
        let response = await Product.findById(id)
        return response;
    }

    //      CREATE PRODUCT      //
    async create(body) {
        const newProduct = new Product(body)
        let response = await newProduct.save()
        return response;
    }

    //      UPDATE PRODUCT      //
    async upDate(id, body) {
        let response = await Product.updateOne({ _id: id }, {
            $set: { ...body }
        })
        return response;
    }

    //      DELETE PRODUCT      //
    async delete(id) {
        let response = await Product.deleteOne({ _id: id })
        return response;
    }
}

//const productsMongoContainer = new ProductsMongoContainer('products')
module.exports = ProductsMongoContainer

