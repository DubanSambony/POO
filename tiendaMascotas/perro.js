
import Mascota from './Mascota.js';

class Perro extends Mascota {
    constructor(nombre) {
        super(nombre, 'Perro');
    }

    hacerSonido() {
        console.log(`${this.nombre} dice: ¡Guau!`);
    }

    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Tipo: ${this.tipo}`);
    }
}

export default Perro;
