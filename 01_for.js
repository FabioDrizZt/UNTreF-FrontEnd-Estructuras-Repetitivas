/* for (let i = 1; i <= 10; i++) {
    console.log(i);
} */

/* for (let i = 10; i > 0; i--) {
    console.log(i);
} */
// Motrar impares
/* for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
} */
// Motrar impares
/* for (let i = 1; i <= 10; i+=2) {
  console.log(i);
} */
// Motrar pares
/* for (let i = 2; i <= 10; i+=2) {
  console.log(i);
} */

/* for (let i = 1; i <= 10; i++) {
  console.log("Tabla de multiplicacion del " + i);
  for (let j = 1; j <= 12; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
} */

// Calcular un promedio de notas
const prompt = require("prompt-sync")({ sigint: true }); // permite cortar la ejecución con ctrl + c
let cantidad = prompt("Ingrese la cantidad de notas: ");
let suma = 0
for (let i = 0; i < cantidad; i++) {
  let nota = parseInt(prompt("Ingrese la nota: "));
  suma += nota;
  console.log(`La nota ${i + 1} es ${nota}`);
}
console.log("La suma de las notas es " + suma);
console.log("El promedio es " + (suma / cantidad));
