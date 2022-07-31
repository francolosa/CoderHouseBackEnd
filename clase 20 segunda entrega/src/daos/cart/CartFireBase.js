const CartFireBaseContainer = require('../../containers/CartFireBase');

class CartFireBase extends CartFireBaseContainer {
    constructor(){
        super('cart')
    }
}

module.exports = CartFireBase