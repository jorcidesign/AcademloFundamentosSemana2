/*
=====================
  * Bucles (loops) *
=====================
*/
// Los bucles en JavaScript permiten ejecutar un bloque de código repetidamente mientras se cumple una condición específica.

// => Bucle while (mientras)
// La condición se evalúa antes de cada iteración. Mientras la condición sea verdadera, se ejecuta el bloque de código.

// Inicialización: Variable de control
let num = 8

// Condición: Expresión que se evalúa antes de cada iteración
while (num <= 10) { // Mientras la condición sea verdadera, se ejecuta el bloque de código
  // Bloque de código
  console.log(num)
  // Actualización: Incremento de la variable de control
  num++ // Bucle infinito
} // Cada vuelta del bucle se llama iteración.

// => Bucle do-while (hacer-mientras)
// Similar al bucle while, pero la condición se evalúa después de cada iteración, lo que garantiza que el bloque de código se ejecute al menos una vez.

let x = 1

do {
  console.log(x)
  x++
} while (x <= 5)

// Diferencia entre while y do-while
// La diferencia entre while y do-while es que el bucle do-while se ejecuta al menos una vez, incluso si la condición es falsa.

const condition = false

while (condition) {
  console.log('Hola')
}

do {
  console.log('Hola')
} while (condition)

// => Bucle for (para)
// El bucle for es el más utilizado. Ejecuta un bloque de código un número específico de veces.

for (let x = 1; x <= 12; x++) {
  // Bloque de código
  console.log('Hola')
  console.log(x)
}

// sintaxis:
/*
for (inicialización; condición; incremento/decremento) {
  // Código a ejecutar en cada iteración
}
*/

// => Recorrer los elementos de un Array:
const usuarios = [
  {
    nombre: 'Juan',
    edad: 25
  }, // índice o posición 0: representa a Juan
  {
    nombre: 'Pedro',
    edad: 30
  }, // índice 1: representa a Pedro
  {
    nombre: 'Ana',
    edad: 20
  }, // índice 2: representa a Ana
  {
    nombre: 'María',
    edad: 35
  }, // índice 3: representa a María
  {
    nombre: 'Luis',
    edad: 40
  } // índice 4: representa a Luis
] // Array de objetos: 3 elementos -> cada elemento es un objeto y representa un usuario

console.log(usuarios[0].edad) // Edad de Juan
console.log(usuarios[1].edad) // Edad de Pedro
console.log(usuarios[2].edad) // Edad de Ana

for (let i = 0; i < usuarios.length; i++) {
  console.log(i)
  console.log(usuarios[i].nombre)
  console.log(usuarios[i].edad)
} // 5 iteraciones

// => Generar rangos de números:
// Ejemplo: Generar los números del 40 - 100
const contenedor = []

for (let n = 1; n <= 400; n++) {
  contenedor.push(n)
}

console.log(contenedor)

// => Controles de flujo (break y continue):
// - break: Rompe el bucle y continúa con la ejecución del código después del bucle.
// Ejemplo romper el bucle en la 5ta iteración:
for (let n = 1; n <= 400; n++) {
  console.log(n)
  if (n === 10) break
}

// - continue: Salta la iteración actual y continúa con la siguiente iteración.
// Ejemplo salatar los números pares:
for (let n = 1; n <= 10; n++) {

  if (n % 2) {
    continue
  }

  console.log(n)

  // if (n % 2 === 0) { // Los operadores de comparación regresan un valor booleano
  //   console.log(n)
  // }

  // if (n % 2) { // 0 -> false
  //   console.log(n)
  // }
}

// => For Anidado:
// - Un bucle for dentro de otro bucle for.
// Ejemplo:
for (let x = 1; x <= 3; x++) { // primer for x
  for (let y = 1; y <= 3; y++) { // segundo for y
    console.log(`x: ${x}, y: ${y}`)
  }
}
