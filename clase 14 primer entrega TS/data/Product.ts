export default class Product {
    private id: number;
    private name: string;
    private description: string;
    private code: number;
    private imgUrl: string;
    private price: number;
    private stock: number;

    constructor (id: number, name: string, description: string, code: number, imgUrl: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.code = code;
        this.imgUrl = imgUrl;
        this.price = price;
        this.stock = stock;
    }

     public save(): String {
        return `${this.id}`
    }
}

