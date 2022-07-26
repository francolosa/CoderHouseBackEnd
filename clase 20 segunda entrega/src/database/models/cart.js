const mongoose = require('mongoose');

const cartCollection = 'cart';

const CartSchema = new mongoose.Schema({
    products: [{
        id: Number,
        name: String,
        code: Number,
        quantity: Number
    }]
})

const Cart = mongoose.model(cartCollection, CartSchema);

module.exports = { Cart }