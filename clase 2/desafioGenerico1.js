class Contador {
    constructor ( nombre, contadorPersonal ){
        this.nombre = nombre;
        this.cuentaIndividual = 0;
        this.contadorPersonal = contadorPersonal+this.cuentaIndividual;
        this.cuentaGeneral = 0;
    }

    obtenerResponsable = () => console.log("a");
}

let contador1 = new Contador ( "jorge", 1)

console.log(contador1)
