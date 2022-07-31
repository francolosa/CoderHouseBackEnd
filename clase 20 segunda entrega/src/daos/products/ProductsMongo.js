const ProductsMongoContainer = require('../../containers/ProductsMongo');

class ProductsMongo extends ProductsMongoContainer {
    constructor(){
        super('products')
    }
}

module.exports = ProductsMongo