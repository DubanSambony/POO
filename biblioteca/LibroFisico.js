
import Libro from './Libro.js';

class LibroFisico extends Libro {
    constructor(titulo, autor, peso) {
        super(titulo, autor);
        this.peso = peso;
    }

    mostrarDetalles() {
        return `${super.mostrarDetalles()} - Peso: ${this.peso} kg`;
    }
}

export default LibroFisico;
