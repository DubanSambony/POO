//ejercicio 4
class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    calcularSueldo(horas) {
        return this.sueldo * horas; 
    }
}

class EmpleadoMedioTiempo extends Empleado {
    calcularSueldo(horas) {
        return this.sueldo * horas * 0.5; 
    }
}

let empleados = [];

function agregarEmpleado() {
    const nombre = document.getElementById("nombre").value;
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const tipo = document.getElementById("tipoEmpleado").value; 
    const horas = parseFloat(document.getElementById("horas").value);

    let nuevoEmpleado;

    if (tipo === "Tiempo Completo") {
        nuevoEmpleado = new EmpleadoTiempoCompleto(nombre, sueldo);
    } else if (tipo === "Medio Tiempo") {
        nuevoEmpleado = new EmpleadoMedioTiempo(nombre, sueldo);
    }

    if (nuevoEmpleado) {
        empleados.push(nuevoEmpleado);
        const sueldoTotal = nuevoEmpleado.calcularSueldo(horas);
        document.getElementById("resultado3").innerHTML = `${nuevoEmpleado.nombre} ha sido agregado. Sueldo total: $${sueldoTotal.toFixed(2)}`; // Cambiado aquí
    } else {
        document.getElementById("resultado3").innerHTML = "Error al agregar el empleado."; 
    }
}

function listarEmpleados() {
    let resultado = "";
    if (empleados.length > 0) {
        empleados.forEach(empleado => {
            resultado += `${empleado.nombre} - Sueldo por hora: $${empleado.sueldo.toFixed(2)}<br>`;
        });
        document.getElementById("resultado3").innerHTML = resultado; 
    } else {
        document.getElementById("resultado3").innerHTML = "No hay empleados registrados."; 
    }
}

