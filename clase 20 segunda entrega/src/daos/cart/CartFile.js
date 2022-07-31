const CartFileContainer = require('../../containers/CartFile');

class CartFile extends CartFileContainer {
    constructor(){
        super('cart')
    }
}

module.exports = CartFile