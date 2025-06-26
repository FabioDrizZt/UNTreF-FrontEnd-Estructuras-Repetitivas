/* let i = 0;
while (i <= 10) {
  console.log(i);
  i++
}
console.log("Fin del programa."); */

// Leer precios de los productos hasta que sumen 100000

const prompt = require("prompt-sync")({ sigint: true }); // permite cortar la ejecución con ctrl + c
let sumaPrecios = 0;
while (sumaPrecios < 100_000){
    let precio = prompt("Ingrese el precio del producto: ");
    let cantidad = prompt("Ingrese la cantidad de productos: ");
    console.log('El total de la compra es ' + (precio*cantidad));
    sumaPrecios += precio*cantidad;
    console.log('La suma de los precios es ' + sumaPrecios);
}

console.log("Llamar al supervisor para llevarse el exceso de efectivo.");
