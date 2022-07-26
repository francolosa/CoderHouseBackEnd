const { Product } = require('../database/models/products')
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://francolosa:francolosa@cluster0.02pc012.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

class ProductsMongo {
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

const productsMongo = new ProductsMongo('products')
module.exports = productsMongo

