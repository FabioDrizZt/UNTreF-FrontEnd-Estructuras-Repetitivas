const prompt = require("prompt-sync")({ sigint: true }); // permite cortar la ejecución con ctrl + c
/* let edad;
do {
  edad = prompt("Ingrese su edad: ");
  if (edad < 0 || edad > 120)
    console.log("Debe ingresar un numero entre 0 y 120.");
} while (edad < 0 || edad > 120);
 */
/* if (edad < 18) {
  console.log("Debes ser mayor de edad para entrar a la universidad.");
} else {
  console.log("Bienvenido a la universidad.");
} */

/* let precio;
do {
  precio = prompt("Ingrese el precio del producto: ");
  if (precio < 0)
    console.log("El precio debe ser positivo.");
} while (precio < 0);
console.log("El precio del producto es " + precio);
 */
let opcion;
do {
  /* Menu de opciones */
  console.log("--- Menu de opciones ---");
  console.log("1. Calcular nota");
  console.log("2. Calcular calificacion");
  console.log("3. Calcular promedio");
  console.log("4. Calcular Nota Mas Alta");
  console.log("5. Calcular Nota Mas Baja");
  console.log("0. Salir");
  opcion = prompt("¿Qué opción desea seleccionar?");
  switch (opcion) {
    case "1":
      console.log("Calcular nota");
      break;
    case "2":
      console.log("Calcular calificacion");
      break;
    case "3":
      console.log("Calcular promedio");
      break;
    case "4":
      console.log("Calcular Nota Mas Alta");
      break;
    case "5":
      console.log("Calcular Nota Mas Baja");
      break;
    case "0":
      console.log("Fin del programa.");
      break;
    default:
      console.log("Opción invalida");
      break;
  }
} while (opcion !== "0");
