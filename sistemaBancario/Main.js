// 
import CuentaAhorros from './cuentaAhorros.js';
import CuentaCorriente from './CuentaCorriente.js';

const cuentas = [
  new CuentaAhorros('123456', 1000),
  new CuentaCorriente('654321', 500)
];

cuentas.forEach(cuenta => {
  cuenta.depositar(100);
  cuenta.retirar(50);

  if (cuenta instanceof CuentaAhorros) {
    cuenta.aplicarIntereses(0.05);
  }

  console.log(`Número de Cuenta: ${cuenta.numeroCuenta}, Saldo: ${cuenta.mostrarSaldo()}`);
});
