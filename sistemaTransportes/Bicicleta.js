// Bicicleta.js
import Transporte from './Transporte.js';

class Bicicleta extends Transporte {
    constructor(capacidad) {
        super(capacidad, 'N/A'); // Las bicicletas no usan combustible
    }

    arrancar() {
        console.log("La bicicleta está lista para pedalear.");
    }

    mostrarDetalles() {
        console.log(`Bicicleta - Capacidad: ${this.capacidad}`);
    }
}

export default Bicicleta;
