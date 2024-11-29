//ejercicio 1
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saluda() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.calificaciones = [];
    }

    agregarCalificacion(calificacion) {
        this.calificaciones.push(calificacion);
    }

    calcularPromedio() {
        if (this.calificaciones.length === 0) return 0;
        const suma = this.calificaciones.reduce((a, b) => a + b, 0);
        return suma / this.calificaciones.length;
    }
}


const estudiante1 = new Estudiante('juan', 17);
console.log(estudiante1.saluda());
estudiante1.agregarCalificacion(8);
estudiante1.agregarCalificacion(9);
console.log(`Promedio: ${estudiante1.calcularPromedio()}`);