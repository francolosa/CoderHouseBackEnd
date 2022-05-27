class Usuario {
    constructor ( nombre, apellido ){
        this.nombre = String(nombre);
        this.apellido = String(apellido);
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){ 
        console.log(`Nombre:${this.nombre} Apellido:${this.apellido}`)
    }
    
    addMascota(nombre){
        this.mascotas.push( String(nombre) )
    }

    countMascotas(){
        console.log(`El usuario ${this.nombre} tiene ${this.mascotas.length} mascotas`)
    }

    addBook(nombre, autor){
        this.libros.push({ nombre: String(nombre), autor: String(autor) })
    }

    getBookNames(){
            let librosName = []
            this.libros.forEach(libro => {
                librosName.push(libro.nombre)
            })
            let librosJoin = librosName.join(", ")
        console.log(`El usuario ${this.nombre} tiene los siguientes libros: ${librosJoin}`)
    }

}

const usuario1 = new Usuario("Homero", "Simpson")

const usuario2 = new Usuario("Bart", "Simpson")

const usuario3 = new Usuario("Lisa", "Simpson")

usuario1.addBook("Javascript Front", "Coderhouse")
usuario1.addBook("Desarrollo Web", "Coderhouse")
usuario1.addMascota("Ayudante De Santa")
usuario1.addMascota("Bola De Nieve")

usuario1.getFullName()
usuario1.countMascotas()
usuario1.getBookNames()


