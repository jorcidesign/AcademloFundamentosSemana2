/*
=====================
  * Condicionales *
=====================
*/
// Las condicionales son estructuras de control que nos permiten tomar decisiones en el código. Se utilizan para ejecutar bloques de código dependiendo de si una condición es verdadera o falsa.

// => La estructura condicional if
// - Condición simple:
// La sentencia if es la estructura más básica de condicionales. Si la condición es verdadera, se ejecuta el bloque de código. Si es falsa, el bloque de código no se ejecuta.

// Recordemos los valores truthy y falsy:
// - Falsy: false, 0, '', null, undefined, NaN
// - Truthy: cualquier valor diferente a falsy

if (true) { // Se convierten en booleanos
  // Bloque de código
  console.log('La condición es verdadera')
}

let a = 3
let b = 3

if (a < b) { // el pregunton
  console.log('a es menor que b')
}

if (a > b) { // el pregunton
  console.log('a es mayor que b')
}

// - Condición compuesta:
// La cláusula else, se utiliza cuando quieres proporcionar una alternativa en caso de que la condición no sea verdadera.
if (a < b) {
  console.log('a es menor que b')
} else {
  console.log('a es mayor que b')
}

// - Condición múltiple:
// La cláusula else if, se utiliza cuando quieres proporcionar una alternativa en caso de que la condición no sea verdadera, pero además quieres evaluar otras condiciones.
if (a < b) {
  console.log('a es menor que b')
} else if (a > b) {
  console.log('a es mayor que b')
} else {
  console.log('a es igual a b')
}

// => Anidamiento de condicionales:
let edad = 18
let permiso = false

if (edad >= 18) {
  if (permiso) {
    console.log('Puedes ingresar al bar')
  } else {
    console.log('No puedes ingresar al bar')
  }
} else {
  console.log('No tienes la edad minima para ingresar')
}

if (edad >= 18 && permiso) {
  console.log('Puedes ingresar al bar')
} else {
  console.log('No tienes la edad o el permiso necesario para ingresar')
}

// => Operador ternario:
// El operador ternario tal como su nombre lo indica, es un operador que necesita tres operandos para funcionar. Es una forma abreviada de escribir una estructura condicional if compuesta.

// condición ? true : 
// condición if {} else {}
const bootcamp = 'Otro bootcamp'

// El propósito del operador ternario es para asignar un valor a una variable dependiendo de una condición. Si necesitas evaluar múltiples condiciones, es mejor utilizar una estructura condicional if.

const admitir = (bootcamp === 'Academlo') ? 'Bienvenido' : 'Aplicar a Academlo'
console.log(admitir)

// let res

// if (false) {
//   res = 'Bienvenido'
// } else {
//   res = 'Aplicar a Academlo'
// }

// console.log(res)

// Múltiples condiciones
// Si necesitas evaluar múltiples condiciones, es mejor utilizar una estructura condicional if.
edad = 105

const eresUn = (edad < 18) ? 'Eres un Niño' :
  (edad < 30) ? 'Eres un Joven' :
    (edad < 60) ? 'Eres un Adulto' :
      (edad < 100) ? 'Eres un Adulto Mayor' :
        'Eres un Alienígena'

if (edad < 18) {
  eresUn = 'Eres un Niño'
} else if (edad < 30) {
  console.log('Eres un Joven')
} else if (edad < 60) {
  console.log('Eres un Adulto')
} else if (edad < 100) {
  console.log('Eres un Adulto Mayor')
} else {
  console.log('Eres un Alienígena')
}

console.log(eresUn)

// => La estructura condicional switch
// La estructura condicional switch es una alternativa a la estructura condicional if. Se utiliza cuando necesitas evaluar una expresión con varios valores posibles.

// Sintaxis:
// switch (expresión) {
//   case valor1:
//     // Bloque de código
//     break
//   case valor2:
//     // Bloque de código
//     break
//   default:
//     // Bloque de código
// }

// => Comparación estricta
// En la estructura condicional switch se utiliza la comparación estricta (===) para evaluar la expresión con los casos. Esto significa que no se realiza conversión de tipos de datos.

const semana = '0'

switch (semana) {
  case 0:
    console.log('Lunes')
    break
  case '0':
    console.log('Martes')
    break
  case 3:
    console.log('Miércoles')
    break
  case 4:
    console.log('Jueves')
    break
  case 5:
    console.log('Viernes')
    break
  case 6:
    console.log('Sábado')
    break
  case 7:
    console.log('Domingo')
    break
  default:
    console.log('No es un día de la semana')
}

// => Agrupación de casos
// - Un efecto secundario de cómo trabaja switch sin break. Si olvidas un break, el código continuará ejecutándose en el siguiente caso sin importar si la condición es verdadera o falsa.

// Estaciones:
// - Invierno: Enero, Febrero, Diciembre
// - Primavera: Marzo, Abril, Mayo
// - Verano: Junio, Julio, Agosto
// - Otoño: Septiembre, Octubre, Noviembre

const mes = 15

let estacion

switch (mes) {
  case 1: // Ene
  case 2: // Feb
  case 12: // Dic
    estacion = 'Estamos en Invierno'
    break
  case 3: // Mar
  case 4: // Abr
  case 5: // May
    estacion = 'Estamos en Primavera'
    break
  case 6: // Jun
  case 7: // Jul
  case 8: // Ago
    estacion = 'Estamos en Verano'
    break
  case 9: // Sep
  case 10: // Oct
  case 11: // Nov
    estacion = 'Estamos en Otoño'
    break
  default:
    estacion = 'No es un mes válido'
}

console.log(estacion)

// => Bloques de código en switch
// Los bloques de código en switch son opcionales. Si no necesitas ejecutar más de una sentencia, no es necesario utilizarlos. Pero es útil cuando necesitas ejecutar más de una sentencia en un mismo caso o cuando necesitas declarar variables dentro de un caso.

let color = 'rojo'

switch (color) {
  case 'azul': {
    let color = 'AZUL'.toLowerCase()
    console.log(`El color es ${color}`)
  }
    break
  case 'rojo': {
    let color = 'AZUL'.toLowerCase()
    console.log(`El color es ${color}`)
  }
    break
  default:
    console.log('El color no es ni azul ni rojo')
}

{
  const semana = 15

  const dias = {
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
    7: 'Domingo'
  }

  if (dias[semana]) {
    console.log(dias[semana])
  } else {
    console.log('No es un día de la semana')
  }

}

{
  const mes = 6

  const estaciones = {
    1: 'Invierno',
    2: 'Invierno',
    3: 'Primavera',
    4: 'Primavera',
    5: 'Primavera',
    6: 'Verano',
    7: 'Verano',
    8: 'Verano',
    9: 'Otoño',
    10: 'Otoño',
    11: 'Otoño',
    12: 'Invierno'
  }

  console.log(estaciones[mes])
}