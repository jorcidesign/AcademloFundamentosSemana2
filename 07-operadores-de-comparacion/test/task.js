// </ #8 Operadores de comparación />

/*
  Ejercicio #1
  Realiza los siguientes ejercicios de operadores de comparación
  Reeplaza null por true o false según corresponda.
*/

// ¿Cúal es el resultado? => 18 == '18'
const ejemplo1 = null

// ¿Cúal es el resultado? => true < false
const ejemplo2 = null

// ¿Cúal es el resultado? => null <= 0
const ejemplo3 = null

// ¿Cúal es el resultado? => 'tierna' >= 'tierra'
const ejemplo4 = null

// ¿Cúal es el resultado? => 0 != ''
const ejemplo5 = null

/*
  Ejercicio #2
  Realiza las siguientes funciones de operadores de comparación
  No modifiques los nombres ni los parámetros de las funciones.
  No debes invocar a las funciones.
  No debes crear otras variables (a menos que los requieras). Utiliza los parámetros que reciben las funciones.
  Recuerda utilizar return para devolver valores.
*/

function sonIguales (num1, num2) {
  // Retorna true si num1 y num2 son iguales, de lo contrario, retorna false.
  // Ten en cuenta que 1 y '1' son tipos diferentes por lo cual deben retornar false.
  // Ejemplo: in: (num1: 18, num2: 18) ~ out: => true
  // Tu código:
}

function tienenMismaLongitud (str1, str2) {
  // Retorna true si las dos strings tienen el mismo largo, de lo contrario, retorna false.
  // Ejemplo: in: (str1: 'hi', str2: 'ha') ~ out: => true
  // Tu código:
}

function menosQueNoventa (num) {
  // Retorna true si num es menor que noventa, de lo contrario, retorna false.
  // Ejemplo: in: (num: 89) ~ out: => true
  // Tu código:
}

function mayorQueCincuenta (num) {
  // Retorna true si num es mayor que cincuenta, de lo contrario, retorna false.
  // Ejemplo: in: (num: 49) ~ out: => false
  // Tu código:
}

function esPar (num) {
  // Retorna true si num es par, de lo contrario, retorna false.
  // Ejemplo: in: (num: 8) ~ out: => true
  // Tu código:
}

function esImpar (num) {
  // Retorna true si num es impar, de lo contrario, retorna false.
  // Ejemplo: in: (num: 7) ~ out: => true
  // Tu código:
}

// NO TOCAR ESTE CÓDIGO
module.exports = {
  ejemplo1,
  ejemplo2,
  ejemplo3,
  ejemplo4,
  ejemplo5,
  sonIguales,
  tienenMismaLongitud,
  menosQueNoventa,
  mayorQueCincuenta,
  esPar,
  esImpar
}
