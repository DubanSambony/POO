//ejercicio 3
class Producto {
    constructor(nombre, precio, cantidadEnStock) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }

    mostrarProducto() {
        return `Producto: ${this.nombre}, Precio: ${this.precio}, Cantidad en stock: ${this.cantidadEnStock}`;
    }
}

class Electrodomestico extends Producto {
    constructor(nombre, precio, cantidadEnStock, marca) {
        super(nombre, precio, cantidadEnStock);
        this.marca = marca;
    }

    mostrarProducto() {
        return `Electrodoméstico: ${this.nombre}, Marca: ${this.marca}, Precio: ${this.precio}, Cantidad en stock: ${this.cantidadEnStock}`;
    }
}

let productos = [];


function toggleMarca() {
    const tipo = document.getElementById("tipoProducto").value;
    const marcaField = document.getElementById("marcaField");
    marcaField.style.display = (tipo === "Electrodomestico") ? "block" : "none";
}


function agregarProducto() {
    const nombre = document.getElementById("nombreProducto").value;
    const precio = document.getElementById("precioProducto").value;
    const cantidad = document.getElementById("cantidadStock").value;
    const tipo = document.getElementById("tipoProducto").value;
    let nuevoProducto;

    if (tipo === "Electrodomestico") {
        const marca = document.getElementById("marcaProducto").value;
        if (!marca) {
            document.getElementById("resultado3").innerHTML = "Por favor, ingresa la marca del electrodoméstico.";
            return;
        }
        nuevoProducto = new Electrodomestico(nombre, parseFloat(precio), parseInt(cantidad), marca);
    } else {
        nuevoProducto = new Producto(nombre, parseFloat(precio), parseInt(cantidad));
    }

    productos.push(nuevoProducto);
    document.getElementById("resultado1").innerHTML = `Se ha agregado el producto: ${nuevoProducto.mostrarProducto()}`;
}


function listarProductosConBajoStock() {
    const productosConBajoStock = productos.filter(producto => producto.cantidadEnStock < 10);
    let resultadoHTML = "<h3>Productos con stock menor a 10:</h3>";

    if (productosConBajoStock.length > 0) {
        productosConBajoStock.forEach(producto => {
            resultadoHTML += `<p>${producto.mostrarProducto()}</p>`;
        });
    } else {
        resultadoHTML += "<p>No hay productos con bajo stock.</p>";
    }

    document.getElementById("resultado1").innerHTML = resultadoHTML;
}