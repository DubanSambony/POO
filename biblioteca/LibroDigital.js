
import Libro from './Libro.js';

class LibroDigital extends Libro {
    constructor(titulo, autor, formato) {
        super(titulo, autor);
        this.formato = formato;
    }

    mostrarDetalles() {
        return `${super.mostrarDetalles()} - Formato: ${this.formato}`;
    }
}

export default LibroDigital;
