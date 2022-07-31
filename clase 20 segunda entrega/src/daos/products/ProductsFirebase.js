const ProductsFireBaseContainer = require('../../containers/ProductsFireBase');

class ProductsFireBase extends ProductsFireBaseContainer {
    constructor(){
        super('products')
    }
}

module.exports = ProductsFireBase