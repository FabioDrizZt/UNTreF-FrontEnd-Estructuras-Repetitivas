const prompt = require("prompt-sync")({ sigint: true }); // permite cortar la ejecución con ctrl + c
let respuesta;
let producto;
let precio;
let cantidad;
let sumaVentas = 0;
let cantidadVentas = 0;
while (true) {
  respuesta = prompt("¿Desea Ingresar un producto? (S/N): ");
  if (respuesta === "N") {
    break;
  }
  producto = prompt("Ingrese el nombre del producto: ");
  if (producto === "") {
    console.log("El nombre del producto no puede estar vacío.");
    continue;
  }
  precio = prompt("Ingrese el precio del producto: ");
  if (precio < 0) {
    console.log("El precio del producto no puede ser negativo.");
    continue;
  }
  cantidad = prompt("Ingrese la cantidad de productos: ");
  if (cantidad < 0) {
    console.log("La cantidad de productos no puede ser negativa.");
    continue;
  }
  let total = precio * cantidad;
  console.log(`El total de la compra es ${total}`);
  sumaVentas += total;
  cantidadVentas++;
}
console.log(`La suma de las ventas es ${sumaVentas}`);
console.log(`La cantidad de ventas es ${cantidadVentas}`);
console.log('El promedio de las ventas es ' + (sumaVentas / cantidadVentas));
