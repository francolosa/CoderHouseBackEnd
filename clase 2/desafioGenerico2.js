class Libro {
    constructor ( autor, editorial, genero ){
        this.autor = String(autor);
        this.editorial = String(editorial);
        this.genero = String(genero);
    }

    mostrarLibro(){ 
        console.log(`autor:${this.autor} editorial:${this.editorial} genero:${this.genero}`)}
    
}
const libro1 = new Libro ("tuvieja", "laputa", "entanga")
libro1.mostrarLibro()
