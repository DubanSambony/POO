
class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    mostrarDetalles() {
        return `${this.titulo} - Autor: ${this.autor}`;
    }
}

export default Libro;
