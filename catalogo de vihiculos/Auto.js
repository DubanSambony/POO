
import Vehiculo from './Vehiculo.js';

class Auto extends Vehiculo {
  conducir() {
    console.log(`Conduciendo el auto ${this.marca} ${this.modelo} del año ${this.año}`);
  }
}

export default Auto;
