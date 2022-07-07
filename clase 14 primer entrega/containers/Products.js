const fs = require('fs');

 class Products {
    constructor(fileName) {
        this.fileName = fileName;
        this.route = `./data/${fileName}.txt`
        this.encode = 'utf-8'
    }

    async save(data) {
        let productsArray = []
        let newProduct = { ...data }
        let id;
        try {
            let productsSTRING = await fs.promises.readFile(this.route, this.encode);
            if (productsSTRING.length > 0) {
                let productsPARSE = await JSON.parse(productsSTRING)
                let newProductId = (productsPARSE[productsPARSE.length - 1].id + 1)
                console.log('case full')
                productsArray.push(...productsPARSE, { id: newProductId , timestamp: Date.now(), ...newProduct })
                console.log(`El id del producto creado es: ${productsPARSE.length}`)
                id = newProductId;
            } else {
                console.log('case new')
                productsArray.push({ id: 0, ...newProduct})
                console.log(`El id del producto es: ${0}`)
                return 0;
            }
            let productsArraySTRING = JSON.stringify(productsArray)
            await fs.promises.writeFile(this.route, productsArraySTRING)
            return id;
        } catch (error) {
            console.log(error)
        }
    }

    async getById(number) {
        try {
            let productsSTRING = await fs.promises.readFile(this.route, this.encode);
            let productsPARSE = await JSON.parse(productsSTRING)
            let productFind = productsPARSE.find((product) => {
                return product.id == number
            });
            return productFind;
        } catch (error) {
            console.log(error)
        }
    }

    async getAll() {
        let productsSTRING = await fs.promises.readFile(this.route, this.encode);
        let productsPARSE = await JSON.parse(productsSTRING)

        try {
            console.log(productsPARSE)
            return productsPARSE;
        } catch (error) {
            console.log(error)
        }
    }

    async deleteById(number) {
        try {
            let productsSTRING = await fs.promises.readFile(this.route, this.encode);
            let productsPARSE = await JSON.parse(productsSTRING)
            let productsUpdate = await productsPARSE.filter(item => {
                return item.id != number
            })
            let productsUpdateSTRING = JSON.stringify(productsUpdate)
            await fs.promises.writeFile(this.route, productsUpdateSTRING)
            console.log(`Se eliminó correctamente el item con id: ${number}`)
        } catch (error) {
            console.log(error)
        }
    }
    async deleteAll() {
        try {
            await fs.promises.writeFile(this.route, "");
            console.log(`Se eliminaron todos los items correctamente`)
        } catch (error) {
            console.log(error)
        }
    }
    async upDate(newProduct) {
        let oldProduct = this.getById(newProduct.id)
        let betaProduct = {
            id: newProduct.id ? newProduct.id : oldProduct.id,
            name: newProduct.name ? newProduct.name : oldProduct.name,
            description: newProduct.description ? newProduct.description : oldProduct.description,
            code: newProduct.code ? newProduct.code : oldProduct.code,
            imgUrl: newProduct.imgUrl ? newProduct.imgUrl : oldProduct.imgUrl,
            price: newProduct.price ? newProduct.price : oldProduct.price,
            stock: newProduct.stock? newProduct.stock : oldProduct.stock
        }
        let productsArray = []
        await this.deleteById(newProduct.id)
        let productsSTRING = await fs.promises.readFile(this.route, this.encode);
        let productsPARSE = await JSON.parse(productsSTRING)
        productsArray.push(...productsPARSE, { ...betaProduct, updatedAt: Date.now() })
        let productsArraySTRING = JSON.stringify(productsArray)
        await fs.promises.writeFile(this.route, productsArraySTRING)
        return productsArraySTRING;
    }
}
const products = new Products('products')
module.exports = products