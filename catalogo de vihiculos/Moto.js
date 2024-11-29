
import Vehiculo from './Vehiculo.js';

class Moto extends Vehiculo {
  conducir() {
    console.log(`Conduciendo la moto ${this.marca} ${this.modelo} del año ${this.año}`);
  }
}

export default Moto;
