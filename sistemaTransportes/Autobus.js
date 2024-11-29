// Autobus.js
import Transporte from './Transporte.js';

class Autobus extends Transporte {
    constructor(capacidad, tipoCombustible) {
        super(capacidad, tipoCombustible);
    }

    arrancar() {
        console.log("El autobús está arrancando.");
    }

    mostrarDetalles() {
        console.log(`Autobús - Capacidad: ${this.capacidad}, Tipo de combustible: ${this.tipoCombustible}`);
    }
}

export default Autobus;
