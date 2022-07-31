const CartMongoContainer = require('../../containers/CartMongo');

class CartMongo extends CartMongoContainer {
    constructor(){
        super('cart')
    }
}

module.exports = CartMongo