
import CuentaBancaria from './CuentaBancaria.js';

class CuentaAhorros extends CuentaBancaria {
  aplicarIntereses(tasaInteres) {
    this.saldo += this.saldo * tasaInteres;
  }
}

export default CuentaAhorros;
