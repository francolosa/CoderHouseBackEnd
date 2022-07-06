export default class Persona {
    private fname: string;
    private lname: string;

    constructor(fname: string, lname: string){
        this.fname = fname;
        this.lname = lname;
    }

    getFullName(): String {
        return `${this.fname} ${this.lname}`
    }
}