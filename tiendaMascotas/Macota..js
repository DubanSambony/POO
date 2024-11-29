
class Mascota {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    hacerSonido() {
        console.log(`${this.nombre} está haciendo un sonido.`);
    }
}

export default Mascota;
