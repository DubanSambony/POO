
import Perro from './Perro.js';
import Gato from './gato.js';

const mascotas = [
    new Perro('MAX'),
    new Gato('LIZ'),
    new Perro('FIRURLAIS'),
    new Gato('ALFREDO')
];


mascotas.forEach(mascota => {
    mascota.hacerSonido(); 
    mascota.mostrarDetalles(); 
});
