class CuentaBancaria {
    constructor(numeroCuenta, saldo) {
      this.numeroCuenta = numeroCuenta;
      this.saldo = saldo;
    }
  
    depositar(cantidad) {
      this.saldo += cantidad;
    }
  
    retirar(cantidad) {
      if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
      } else {
        console.log('Fondos insuficientes');
      }
    }
  
    mostrarSaldo() {
      return this.saldo;
    }
  }
  
  export default CuentaBancaria;
  