class Cliente {
    constructor ( nombre, fecha, direccion ){
        this.nombre = nombre;
        this.fecha = fecha;
        this.direccion = direccion;
    }
}

let user1 = new Cliente('Franco', Date().toString(), 'Calle Falsa 123'  )
let user2 = new Cliente('asdads', Date().toString(), 'Calle Falsa 123'  )

console.log(user1);
console.log(user2);