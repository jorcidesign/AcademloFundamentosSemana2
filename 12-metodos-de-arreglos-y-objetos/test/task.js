// </ #12 Métodos de arreglos y objetos />

/*
  Ejercicio #1
  Realiza los siguientes ejercicios con arreglos
  No modifiques los nombres ni los parámetros de las funciones.
  No debes invocar a las funciones.
  No debes crear otras variables (a menos que los requieras). Utiliza los parámetros que reciben las funciones.
  Recuerda utilizar return para devolver valores.
*/

function regresaElUltimoElemento (arr) {
  // Retrona el último elemento de un arreglo.
  // Ejemplo: in: (arr: [1, 2, 3]) ~ out: => 3
  // Tu código:
}

function combinaDosArreglos (arr, arr2) {
  // Retrona un array que contenga los elementos de dos arrays.
  // Ejemplo: in: (arr: [1, 2, 3], arr2: [4, 5, 6]) ~ out: => [1, 2, 3, 4, 5, 6]
  // Tu código:
}

function aplanarArreglo (arr) {
  // Retrona un array que contenga los elementos de un arreglo de arreglos.
  // Ejemplo: in: (arr: [[1, 2], [3, 4], [5, 6]]) ~ out: => [1, 2, 3, 4, 5, 6]
  // Tu código:
}

function odenarDeMayorAmenor (arr) {
  // Retrona un array que contenga los elementos de un arreglo ordenados de mayor a menor.
  // Ejemplo: in: (arr: [1, 3, 2]) ~ out: => [3, 2, 1]
  // Tu código:
}

function agregarElementoSinModificarOriginal (arr, elemento) {
  // Retrona un nuevo arreglo que contenga los elementos de un arreglo y un elemento adicional al final.
  // Ejemplo: in: (arr: [1, 2, 3], elemento: 4) ~ out: => { nuevoArreglo: [1, 2, 3, 4], arregloOriginal: [1, 2, 3] }
  // Tu código:
  return {
    nuevoArreglo: null,
    arregloOriginal: arr
  }
}

function eliminarElementoSinModificarOriginal (arr, elemento) {
  // Retrona un nuevo arreglo que contenga los elementos de un arreglo sin un elemento específico.
  // Ejemplo: in: (arr: [1, 2, 3, 4], elemento: 3) ~ out: => { nuevoArreglo: [1, 2, 4], arregloOriginal: [1, 2, 3, 4] }
  // Tu código:
  return {
    nuevoArreglo: null,
    arregloOriginal: arr
  }
}

function contarCantidadDeArticulos (arr) {
  // De un arreglo de objetos, donde cada objeto es un artículo, retorna la cantidad total de artículos.
  // Ejemplo: in: (arr: [{ qty: 1 }, { qty: 2 }, { qty: 3 }]) ~ out: => 6
  // Tu código:
}

function palindromo (texto) {
  // Retrona true si el texto es un palíndromo, de lo contrario retorna false.
  // Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
  // Ejemplo: in: (texto: 'anita lava la tina') ~ out: => true
  // Tu código:
}

function unirCadenaDeTexto (arr) {
  // Retrona un texto que contenga los elementos de un arreglo separados por un espacio.
  // Ejemplo: in: (arr: ['JavaScript', 'es', 'genial']) ~ out: => 'JavaScript es genial'
  // Tu código:
}

function invieteElOrdenDeLaCadena (texto) {
  // Retrona un texto en orden inverso.
  // Ejemplo: in: (texto: 'Hola mundo') ~ out: => 'odnum aloH'
  // Tu código:
}

function buscarCoincidencias (arr, arr2) {
  // Retrona un arreglo que contenga los elementos que se repiten en dos arreglos.
  // Ejemplo: in: (arr: [4, 2, 3], arr2: [3, 4, 5]) ~ out: => [4, 3]
  // Nota: Los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
}

// NO TOCAR ESTE CÓDIGO
module.exports = {
  regresaElUltimoElemento,
  combinaDosArreglos,
  aplanarArreglo,
  odenarDeMayorAmenor,
  agregarElementoSinModificarOriginal,
  eliminarElementoSinModificarOriginal,
  contarCantidadDeArticulos,
  palindromo,
  unirCadenaDeTexto,
  invieteElOrdenDeLaCadena,
  buscarCoincidencias
}
