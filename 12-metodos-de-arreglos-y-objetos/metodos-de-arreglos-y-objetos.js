/*
=======================================
  * Métodos de arreglos y objetos *
=======================================
*/
// Trabajando con arreglos
const frutas = ['Manzana', 'Pera', 'Naranja', 'Pera']

// => Comprobar si un arreglo es un arreglo
console.log(typeof frutas)
console.log(frutas instanceof Array)
const obj = {}
console.log(Array.isArray(obj))
console.log(Array.isArray(frutas))

// => Métodos par arreglos:
// Métodos de Búsqueda y Verificación:
// arr.indexOf(elemento, índice/posición):
// - Devuelve la posición de la primera ocurrencia o -1 si no se encuentra.
console.log(frutas)
//                         0         1        2         3
console.log(frutas.indexOf('Naranja'))
console.log(frutas.indexOf('Pera', 2))
console.log(frutas.indexOf('Kiwi'))

// arr.lastIndexOf(elemento, índice/posición):
// - Lo mismo que indexOf pero comienza la búsqueda desde el final.
console.log(frutas.lastIndexOf('Naranja'))
console.log(frutas.lastIndexOf('Pera'))
console.log(frutas.lastIndexOf('Pera', 2))
console.log(frutas.lastIndexOf('Kiwi'))

// arr.includes(elemento, índice/posición):
// - Devuelve true si encuentra el elemento, de lo contrario devuelve false.
console.log(frutas.includes('Naranja'))
console.log(frutas.includes('Kiwi'))

// Métodos de Manipulación:
// arr.slice(inicio:índice/posición, final:índice/posición):
// - Extrae un elemento o elementos del arreglo desde inicio hasta final (final no incluido).
console.log(frutas)
//                       0         1        2         3
//                      -4        -3       -2        -1
console.log(frutas.slice()) // Copia del arreglo
console.log(frutas.slice(1)) // Desde la posición 1 hasta el final
console.log(frutas.slice(-2))
console.log(frutas.slice(4)) // Un arreglo vacío


// arr.splice(inicio:índice/posición, cantidad, elemento1, elemento2, ...):
// - Elimina elementos de un arreglo y opcionalmente los reemplaza por nuevos elementos.
console.log(frutas)
const copyFrutas = frutas.slice() // Copia del arreglo frutas

console.log(copyFrutas)
//                              0        1        2         3
console.log(copyFrutas.splice(1, 0, 'Kiwi', 'Sandía', 'Melón'))
console.log(copyFrutas)

// arr.concat(elemento1, elemento2, ...):
// - Concatena dos o más arreglos o elementos.
const arr = [1, 2, 3]
const arr2 = [7, 8, 9]
const arr3 = arr.concat(4, 5, 6, arr2, [10, 11, 12])
console.log(arr3)

const str = 'Me encanta programar con JavaScript'
const newArr = str.split(' ')
console.log(str.split()) // me devuelve un arreglo con un solo elemento
console.log(str.split('')) // me devuelve un arreglo con cada caracter como elemento
// arr.join(pegamento):
// - Une todos los elementos de un arreglo en una cadena de texto.
console.log(newArr)
console.log(newArr.join()) // Por defecto une los elementos con coma 
console.log(newArr.join('')) // Une los elementos sin ningún separador
console.log(newArr.join(' ')) // Une los elementos con un espacio

// Métodos de Ordenamiento:
console.log(newArr)
// arr.reverse():
// - Invierte el orden de los elementos de un arreglo.
console.log(newArr.reverse())
console.log(str)

const strToArray = str.split(' ')
const invertedArr = strToArray.reverse()
console.log(invertedArr.join(' '))
console.log(str.split(' ').reverse().join(' '))

console.log(str.split('').reverse().join(''))

// arr.sort([función]):
// - Ordena los elementos de un arreglo.
// - La función de comparación es opcional.
console.log(frutas)
frutas.push('Arandano')
console.log(frutas.sort())

const numeros = [1, 10, 4, 2, 1000, 500, 34, 21]

// Forma #1 - creamos la funcción por fuera y la pasamos como argumento
function ordenamiento (num, num2) {
  return num2 - num
}

console.log(numeros.sort(ordenamiento))

// Forma #2 - creamos la función dentro del argumento
const order = numeros.sort(function (a, b) { return a - b })
console.log(order)

// => Trabajando con objetos
const persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 25,
  direccion: {
    calle: 'Av. 123',
    numero: 123,
    colonia: 'Col. Centro'
  }
}

// => Métodos para objetos:
// Object.keys(objeto):
// - Devuelve un arreglo con las llaves del objeto.
console.log(Object.keys(persona))

// Object.values(objeto):
// - Devuelve un arreglo con los valores del objeto.
console.log(Object.values(persona))

// Object.entries(objeto):
// - Devuelve un arreglo con las llaves y valores del objeto.
console.log(Object.entries(persona))
const matrix = Object.entries(persona)
console.log(matrix)

// Object.fromEntries(arreglo):
// - Devuelve un objeto a partir de un arreglo de llaves y valores.
console.log(Object.fromEntries(matrix))

// Object.assign(objeto1, objeto2, ...):
// - Copia las propiedades de un objeto en otro objeto.
const newObj = {}

Object.assign(newObj, persona, { nombre: 'Diego', edad: 20 })

console.log(newObj)
newObj.direccion.calle = 'Av. 456'
console.log(newObj.direccion)
console.log(persona.direccion)

// =>  Objetos y JSON:
// - JSON (JavaScript Object Notation) es un formato de intercambio de datos.
// - Puedes convertir un objeto a una cadena JSON usando JSON.stringify() y viceversa con JSON.parse().
// deep Copy
const copyPersona = JSON.stringify(persona)
console.log(typeof copyPersona) // A esto se le conoce como serializar un objeto

const newPersona = JSON.parse(copyPersona)
console.log(newPersona)
newPersona.direccion.calle = 'Av. 999'
console.log(newPersona.direccion)

console.log(persona.direccion)
