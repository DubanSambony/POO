
class Transporte {
    constructor(capacidad, tipoCombustible) {
        this.capacidad = capacidad;
        this.tipoCombustible = tipoCombustible;
    }

    arrancar() {
        console.log("El transporte está arrancando.");
    }
}

export default Transporte;
