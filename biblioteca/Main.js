// main.js
import LibroDigital from './LibroDigital.js';
import LibroFisico from './LibroFisico.js';

const libros = [
    new LibroDigital('El Alquimista', 'Paulo Coelho', 'PDF'),
    new LibroFisico('Cien Años de Soledad', 'Gabriel García Márquez', 0.5),
    new LibroDigital('1984', 'George Orwell', 'EPUB'),
    new LibroFisico('Don Quijote de la Mancha', 'Miguel de Cervantes', 1.2)
];

function listarLibrosPorAutor(autor) {
    const librosPorAutor = libros.filter(libro => libro.autor.toLowerCase() === autor.toLowerCase());
    return librosPorAutor.map(libro => libro.mostrarDetalles());
}

// Ejemplo de uso
const autorBuscado = 'Gabriel García Márquez';
const librosEncontrados = listarLibrosPorAutor(autorBuscado);
console.log(`Libros encontrados de ${autorBuscado}:`);
librosEncontrados.forEach(detalle => console.log(detalle));
