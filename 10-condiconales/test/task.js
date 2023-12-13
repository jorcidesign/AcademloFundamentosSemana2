// </ #10 Condicionales />

/*
  Ejercicio #1
  Realiza las siguientes funciones de condicionales
  No modifiques los nombres ni los parámetros de las funciones.
  No debes invocar a las funciones.
  No debes crear otras variables (a menos que los requieras). Utiliza los parámetros que reciben las funciones.
  Recuerda utilizar return para devolver valores.
*/

function positivoNegativo (numero) {
  // Retorna 'positivo' si el número es mayor que cero, 'negativo' si es menor que cero y 'cero' si es igual a cero.
  // Ejemplo: in: (numero: 1) ~ out: => 'positivo'
  // Tu código:
  if (numero > 0) {
    return 'positivo'
  } else if (numero < 0) {
    return 'negativo'
  } else {
    return 'cero'
  }
}

function asignarCalificacion (nota) {
  // La función recibe una nota del 1 al 10 y deberá devolver un string de la siguiente forma:
  // 'Insuficiente' si la nota es menor a 6 y mayor o igual a 0.
  // 'Suficiente' si la nota es igual a 6.
  // 'Bien' si la nota es mayor o igual a 7 y menor a 9.
  // 'Excelente' si la nota es mayor o igual a 9 y menor o igual a 10.
  // 'Nota inválida' si no cumple ninguno de los valores anteriores.
  // Ejemplo: in: (nota: 8) ~ out: => 'Bien'
  // Tu código:
  if (nota < 6 && nota >= 0) {
    return 'Insuficiente'
  } else if (nota === 6) {
    return 'Suficiente'
  } else if (nota >= 7 && nota < 9) {
    return 'Bien'
  } else if (nota >= 9 && nota <= 10) {
    return 'Excelente'
  } else {
    return 'Nota inválida'
  }
}

function iniciarSesion (usuario, password) {
  // Necesitamos saber si un usuario inició sesión correctamente tomando en cuenta los siguientes datos:
  // Si el usuario es 'admin' y la contraseña es '12345', el sistema mostrará 'Bienvenido admin'.
  // Si el usuario es 'admin' y la contraseña está vacía o es null, el sistema mostrará 'Debes ingresar tu contraseña'.
  // De lo contrario, mostrará 'Contraseña incorrecta'.
  // Si el usuario está vacío o es null, debe mostrar 'Debes ingresar tu usuario'.
  // Si el usuario es distinto de 'admin', debe mostrar 'Usuario incorrecto'.
  // Ejemplo: in: (usuario: 'admin', password: '12345') ~ out: => 'Bienvenido admin'
  // Ejemplo: in: (usuario: 'admin', password: '') ~ out: => 'Debes ingresar tu contraseña'
  // Ejemplo: in: (usuario: 'admin', password: '1234') ~ out: => 'Contraseña incorrecta'
  // Ejemplo: in: (usuario: 'daniel', password: '12345') ~ out: => 'Usuario incorrecto'
  // Ejemplo: in: (usuario: '', password: '12345') ~ out: => 'Debes ingresar tu usuario'
  // Tu código:
  if (usuario === 'admin') {
    if (password === '12345') {
      return 'Bienvenido admin'
    } else if (password === '' || password === null) {
      return 'Debes ingresar tu contraseña'
    } else {
      return 'Contraseña incorrecta'
    }
  } else if (usuario === '' || usuario === null) {
    return 'Debes ingresar tu usuario'
  } else {
    return 'Usuario incorrecto'
  }
}

function carritoDeCompras (articulo, carrito) {
  // Necesitamos agregar un artículo al carrito de compras, pero debemos validar si el artículo existe, de ser así, debemos sumar uno a la cantidad, de lo contrario, debemos agregarlo y asignarle el valor de 1.
  // Ejemplo: in: (articulo: 'manzana', carrito: {}) ~ out: => { manzana: 1 }
  if (carrito[articulo]) {
    // si está, entonces incrementarle 1
    carrito[articulo]++
  } else {
    // si no está, agregarlo y colocarle 1
    carrito[articulo] = 1
  }

  // Debe retornar el carrito de compras.
  return carrito
}

function losDeLaMitad (arreglo) {
  // La función recibe un arreglo de números.
  // Si la longitud del arreglo es un número par, retorna los dos elementos del medio en un nuevo arreglo.
  // Ejemplo: in: (arreglo: [1, 2, 3, 4]) ~ out: => [2, 3]
  // Si la longitud del arreglo es un número impar, retorna el elemento del medio.
  // Ejemplo: in: (arreglo: [1, 2, 3]) ~ out: => 2
  // Tu código:
  const mitad = Math.floor(arreglo.length / 2)

  if (arreglo.length % 2 === 0) {
    return [arreglo[mitad - 1], arreglo[mitad]]
  } else {
    return arreglo[mitad]
  }
}

// const arr = [1, 2, 3, 4] // 3
// //           0  1  2  3
// const mitad = Math.floor(arr.length / 2)
// console.log([arr[mitad - 1], arr[mitad]])
// console.log(arr.length % 2 === 0)

// const pares = [1, 2, 3, 4] // 4
// const impares = [1, 2, 3] // 3

// const mitad = Math.floor(pares.length / 2)

// if (pares.length % 2 === 0) {
//   // es par
//   console.log(mitad - 1)

//   console.log([pares[mitad - 1], pares[mitad]])
// } else {
//   // es impar
//   console.log(impares[mitad])

// }


function dobleONada (num) {
  // La función recibe un número, si es mayor a 10, retorna ese mismo número. Si no es mayor a 10, retorna el doble del número recibido.
  // Ejemplo: in: (num: 8) ~ out: => 16
  // Ejemplo: in: (num: 12) ~ out: => 12
  // Puedes usar el operador ternario.
  // Tu código:
  return (num > 10) ? num : num * 2
}

function soloMinusculas (str) {
  // La función recibe una cadena de texto, Si la cadena tiene al menos un caracter en mayúscula, retorna 'Hay mayúsculas'. De lo contrario, retorna 'Todas son minúsculas'.
  // Ejemplo: in: (str: 'hola') ~ out: => 'Todas son minúsculas'
  // Puedes usar el operador ternario.
  // Tu código:
  const minusculas = str.toLowerCase()
  return (str !== minusculas) ? 'Hay mayúsculas' : 'Todas son minúsculas'
}

function parOImpar (num) {
  // La función recibe un número, si es par, retorna el número y el texto 'es par' en un string.
  // Ejemplo: in: (num: 8) ~ out: => '8 es par'
  // De lo contrario, retorna el número y el texto 'es impar'.
  // Ejemplo: in: (num: 11) ~ out: => '11 es impar'
  // Puedes usar el operador ternario.
  // Tu código:
  return (num % 2 === 0) ? `${num} es par` : `${num} es impar`
}

function pizzaNapolis (pizza) {
  let precio /* eslint-disable-line */
  /*
    [pizza] => [precio]
    'pepperoni' => 100
    'hawaiana' => 150
    'mexicana' => 200
    'cuatro quesos' => 250
    'especial' => 300
  */
  // Utiliza la sentencia switch para evaluar el parámetro pizza y asignarle un precio.
  // Deberás retornar el siguiente mensaje: 'El precio de la [pizza] es de $[precio]'
  // Si la pizza no existe, debemos retornar 'No tenemos la pizza [pizza]'
  // Ejemplo: in: (pizza: 'pepperoni') ~ out: => 'El precio de la pizza pepperoni es de $100'
  // Ejemplo: in: (pizza: 'veggie') ~ out: => 'No tenemos la pizza veggie'
  // Tu código:
  switch (pizza) {
    case 'pepperoni':
      precio = 100
      break
    case 'hawaiana':
      precio = 150
      break
    case 'mexicana':
      precio = 200
      break
    case 'cuatro quesos':
      precio = 250
      break
    case 'especial':
      precio = 300
      break
    default:
      return `No tenemos la pizza ${pizza}`
  }

  return `El precio de la pizza ${pizza} es de $${precio}`
}

// NO TOCAR ESTE CÓDIGO
module.exports = {
  positivoNegativo,
  asignarCalificacion,
  iniciarSesion,
  carritoDeCompras,
  losDeLaMitad,
  dobleONada,
  soloMinusculas,
  parOImpar,
  pizzaNapolis
}
