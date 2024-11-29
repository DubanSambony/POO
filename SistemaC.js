//ejercicio 7
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
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

o
class Curso {
    constructor(nombreCurso, descripcionCurso) {
        this.nombreCurso = nombreCurso;
        this.descripcionCurso = descripcionCurso;
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    calcularPromedioCurso() {
        if (this.estudiantes.length === 0) return 0;
        const sumaPromedios = this.estudiantes.reduce((suma, estudiante) => suma + estudiante.calcularPromedio(), 0);
        return sumaPromedios / this.estudiantes.length;
    }
}

const curso1 = new Curso('Matemáticas Avanzadas', 'Este curso cubre los conceptos más importantes de matemáticas avanzadas.');


document.getElementById('nombre-curso').textContent = `Curso: ${curso1.nombreCurso}`;
document.getElementById('descripcion-curso').textContent = curso1.descripcionCurso;


function actualizarVista() {
    const tabla = document.getElementById('lista-estudiantes');
    tabla.innerHTML = '';
    curso1.estudiantes.forEach(estudiante => {
        const fila = document.createElement('tr');

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = estudiante.nombre;

        const celdaEdad = document.createElement('td');
        celdaEdad.textContent = estudiante.edad;

        const celdaPromedio = document.createElement('td');
        celdaPromedio.textContent = estudiante.calcularPromedio().toFixed(2);

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEdad);
        fila.appendChild(celdaPromedio);

        tabla.appendChild(fila);
    });


    document.getElementById('promedio-curso').textContent = `Promedio general del curso: ${curso1.calcularPromedioCurso().toFixed(2)}`;

  
    const selectEstudiantes = document.getElementById('estudiante-calificacion');
    selectEstudiantes.innerHTML = '<option value="">Seleccione un estudiante</option>';
    curso1.estudiantes.forEach((estudiante, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = estudiante.nombre;
        selectEstudiantes.appendChild(option);
    });
}


document.getElementById('agregar-estudiante').addEventListener('click', () => {
    const nombre = document.getElementById('nombre-estudiante').value;
    const edad = parseInt(document.getElementById('edad-estudiante').value, 10);

    if (nombre && edad) {
        const nuevoEstudiante = new Estudiante(nombre, edad);
        curso1.agregarEstudiante(nuevoEstudiante);
        actualizarVista();
       
        document.getElementById('nombre-estudiante').value = '';
        document.getElementById('edad-estudiante').value = '';
    }
});


document.getElementById('agregar-calificacion').addEventListener('click', () => {
    const indexEstudiante = document.getElementById('estudiante-calificacion').value;
    const calificacion = parseInt(document.getElementById('calificacion-estudiante').value, 10);

    if (indexEstudiante !== '' && calificacion) {
        curso1.estudiantes[indexEstudiante].agregarCalificacion(calificacion);
        actualizarVista();
       
        document.getElementById('calificacion-estudiante').value = '';
    }
});


actualizarVista();