
import Mascota from './Mascota.js';

class Gato extends Mascota {
    constructor(nombre) {
        super(nombre, 'Gato');
    }

    hacerSonido() {
        console.log(`${this.nombre} dice: ¡Miau!`);
    }

    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Tipo: ${this.tipo}`);
    }
}

export default Gato;
