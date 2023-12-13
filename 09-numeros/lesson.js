/*
===============
  * Números *
===============
*/
// Un tipo de dato primitivo que se utiliza para representar valores numéricos.
const entero = 100
const decimal = 85.6

// => Formas de representar un número:
console.log(1_000_000_000)
console.log(1e9) // Notación exponencial
console.log(1e-6) // Notación exponencial
console.log(0xff) // Hexadecimal
console.log(0b11111111) // Binario
console.log(0o377) // Octal

// Funciones, propiedades y métodos para trabajar con números:
console.log(+'4')
console.log(parseInt('4px'))
console.log(parseFloat('4.5px'))
console.log(parseFloat('4px'))

// Números especiales:
console.log(1 / 0) // Infinity
// isFinite(n) Devuelve true si el valor es un número finito.
console.log(isFinite(15))
console.log(isFinite('15'))
console.log(isFinite(Infinity))

// isNaN(n) Devuelve true si el valor no es un número.
console.log(isNaN(1))
console.log(isNaN('abc'))

// Métodos del objeto Number:
console.log(Number.isFinite(15))
console.log(Number.isFinite('15'))
console.log(Number.isFinite(Infinity))

console.log(Number.isNaN(1))
console.log(Number.isNaN('abc'))

// Propiedades del objeto Number:
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// => Métodos para números
console.log(1 + 2)
console.log(15.1 + 8.2)
console.log(0.1 + 0.2)
// num.toFixed(n): Devuelve un string con un número de decimales indicado.
console.log(25.6865485.toFixed(5)) // Redondea tal cual como lo hace el método Math.round()
console.log(5..toFixed(1))
console.log((0.1 + 0.2).toFixed(1))

console.log(12345678912345678912) // number
console.log(12345678912345678912n) // BigInt

// num.toString(base): Devuelve un string con el número indicado.
console.log(100 + '')
console.log(100..toString(10)) // 10: decimal
console.log(100..toString(2)) // 2: binario
console.log(100..toString(8)) // 8: octal
console.log(100..toString(16)) // 16: hexadecimal

// => Objeto Math: Proporciona propiedades y métodos para realizar tareas matemáticas.
console.log(Math)

// Propiedades del objeto Math:
console.log(Math.PI)

// Métodos del objeto Math:
console.log(Math.round(5.4)) // Redondea al entero más cercano.
console.log(Math.round(5.5)) // Redondea al entero más cercano.
console.log(Math.floor(5.9)) // Redondea al entero por debajo.
console.log(Math.ceil(5.1)) // Redondea al entero por encima.

// Raíz cuadrada
console.log(Math.sqrt(81)) // devuelve la raíz cuadrada de un número.

// Potencia
console.log(Math.pow(2, 5)) // devuelve la potencia de un número.
console.log(2 ** 5) // devuelve la potencia de un número.

// Número aleatorio
console.log(Math.random()) // devuelve un número aleatorio entre 0 y 1.
console.log(Math.floor((Math.random() * 10) + 1)) // devuelve un número aleatorio entre 1 y 10.
