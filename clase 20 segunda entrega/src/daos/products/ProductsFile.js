const ProductsFileContainer = require('../../containers/ProductsFile');

class ProductsFile extends ProductsFileContainer {
    constructor(){
        super('products')
    }
}

module.exports = ProductsFile 