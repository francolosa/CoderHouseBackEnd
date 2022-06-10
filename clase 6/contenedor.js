import fs from 'fs';

export class Contenedor {
    constructor(fileName) {
        this.fileName = fileName;
        this.route = `./data/${fileName}.txt`
        this.encode = 'utf-8'
    }

    async save(title, price, thumbnail) {
        let productsArray = []
        let newProduct = { title: title, price: price, thumbnail: thumbnail }
        try {
            let productsSTRING = await fs.promises.readFile(this.route, this.encode);
            if (productsSTRING.length > 0) {
                let productsPARSE = await JSON.parse(productsSTRING)
                let newProductId = (productsPARSE[productsPARSE.length - 1].id + 1)
                console.log('case full')
                console.log(newProductId)
                productsArray.push(...productsPARSE, { ...newProduct, id: newProductId })
                console.log(`El id del producto creado es: ${productsPARSE.length + 1}`)
            } else {
                console.log('case new')
                productsArray.push({ ...newProduct, id: 0 })
                console.log(`El id del producto es: ${0}`)
            }
            let productsArraySTRING = JSON.stringify(productsArray)
            await fs.promises.writeFile(this.route, productsArraySTRING)
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
            console.log(productFind)
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
}

export const productos = new Contenedor('productos')
