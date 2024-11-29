
import Auto from './Auto.js';
import Moto from './Moto.js';

const vehiculos = [
  new Auto('Toyota', 'Corolla', 2020),
  new Moto('Yamaha', 'MT-07', 2021)
];

function listarVehiculosPorTipo(tipo) {
  return vehiculos.filter(vehiculo => vehiculo instanceof tipo);
}


const autos = listarVehiculosPorTipo(Auto);
console.log('Autos:');
autos.forEach(auto => auto.conducir());


const motos = listarVehiculosPorTipo(Moto);
console.log('Motos:');
motos.forEach(moto => moto.conducir());
