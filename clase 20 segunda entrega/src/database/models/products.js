const mongoose = require('mongoose');

const productsCollection = 'products';

const ProductSchema = new mongoose.Schema({
    name: {type: String, require: true, max: 100},
    description: {type: String, require: false, max: 100},
    code: {type: Number, require: true, max: 9999},
    imgUrl: {type: String, require: false, max: 100},
    price: {type: Number, require: true, max: 9999},
    stock: {type: Number, require: true, max: 9999},
    //updatedAt: {type: Date, require: false, max: 100},
    //createdAt: {type: Date, require: true, max: 100},
})

const Product = mongoose.model(productsCollection, ProductSchema);

module.exports = { Product }