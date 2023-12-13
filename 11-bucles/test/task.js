// </ #11 Bucles />

/*
  Ejercicio #1
  Realiza los siguientes ejercicios con bucles
  No modifiques los nombres ni los parámetros de las funciones.
  No debes invocar a las funciones.
  No debes crear otras variables (a menos que los requieras). Utiliza los parámetros que reciben las funciones.
  Recuerda utilizar return para devolver valores.
*/

function contadorDeVocales (texto) {
  // Retorna el número de vocales que tiene un texto.
  // Ten en cuenta que una vocal puede estar en mayúscula o minúscula.
  // Ejemplo: in: (texto: 'Hola Mundo') ~ out: => 4
  // Tu código:
  const vocales = ['a', 'e', 'i', 'o', 'u']
  let counter = 0

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i].toLowerCase())) {
      counter++
    }
  }

  return counter
}

// const vocales = ['a', 'e', 'i', 'o', 'u']

// const str = 'Me gusta programar en JavaScript'
// let counter = 0

// for (let i = 0; i < str.length; i++) {
//   if (vocales.includes(str[i].toLowerCase())) {
//     counter++
//   }
// }

// console.log(counter)

function rangoDeNumeros (inicio, final) {
  // Retorna un rango de números entre el número inicial y el número final.
  // El número inicial siempre será menor que el número final.
  // Ejemplo: in: (inicio: 1, final: 5) ~ out: => [1, 2, 3, 4, 5]
  // Tu código:
  const numeros = []

  for (let n = inicio; n <= final; n++) {
    numeros.push(n)
  }

  return numeros
}


function sumarNumerosDelArreglo (numeros) {
  // Retorna la sumatoria de todos los números de un array.
  // Ejemplo: in: (numeros: [1, 2, 3]) ~ out: => 6
  // Tu código:
  let suma = 0

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
  }

  return suma
}

// const arr = [1, 2, 3]
// let suma = 0

// for (let i = 0; i < arr.length; i++) {
//   suma += arr[i]
// }

// console.log(suma)

function multiplosDeN (multiplo, final) {
  // Retorna los múltiplos de un número entre el número inicial y el número final sin incluir ambos números.
  // Ejemplo: in: (multiplo: 20, final: 100) ~ out: => [40, 60, 80]
  // Tu código:
  const multiplos = []

  for (let n = multiplo + 1; n < final; n++) {
    if (n % multiplo === 0) {
      multiplos.push(n)
    }
  }

  return multiplos
}

// const m = 20
// const f = 100

// for (let n = m + 1; n < f; n++) {
//   console.log(n)
//   if (n % m === 0) {
//     console.log(n)
//   }
// }

function numeroMasGrande (numeros) {
  // Retorna el número más grande de un array.
  // Ejemplo: in: (numeros: [15, 2, 35, 26]) ~ out: => 35
  // Tu código:
  let max = 0

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i]
    }
  }

  return max
}

// const arr = [15, 2, 35, 26]

// let max = 0

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i]
//   }
// }

// console.log(max)



function contarColores (colores) {
  // Retorna el número de veces que se repite un color en un array.
  // Ejemplo: in: (colores: ['rojo', 'azul', 'rojo', 'verde', 'azul', 'rojo']) ~ out: => { rojo: 3, azul: 2, verde: 1 }
  // Tu código:
  const lista = {}

  for (let i = 0; i < colores.length; i++) {
    const color = colores[i]
    // Pregutar si en la lista tenemos el color
    // si el color tal existe en la lista
    if (lista[color]) {
      // si existe, sumarle 1
      lista[color]++
    } else {
      // si no existe, agregarlo a la lista con valor 1
      lista[color] = 1
    }
  }

  return lista
}

// 'rojo', 'azul', 'rojo', 'verde', 'azul', 'rojo'
// rojo: 3
// azul: 2
// verde: 1

// const colores = ['rojo', 'azul', 'rojo', 'verde', 'azul', 'rojo']
// const lista = {}

// for (let i = 0; i < colores.length; i++) {
//   const color = colores[i]
//   // Pregutar si en la lista tenemos el color
//   // si el color tal existe en la lista
//   if (lista[color]) {
//     // si existe, sumarle 1
//     lista[color]++
//   } else {
//     // si no existe, agregarlo a la lista con valor 1
//     lista[color] = 1
//   }
// }

// console.log(lista)


function filtrarPorEdad (usuarios) {
  // Retorna un array con los usuarios que sean mayores de 20 pero menores de 30 años.
  /* Ejemplo: in: (usuarios: [
    { nombre: 'John', edad: 19 },
    { nombre: 'Jane', edad: 21 }
  ]) ~ out: => [{ nombre: 'Jane', edad: 21 }] */
  // Tu código:
  const filtrados = []

  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i]
    if (usuario.edad > 20 && usuario.edad < 30) {
      filtrados.push(usuario)
    }
  }

  return filtrados
}

function contarLikesDeUsuarios (usuarios) {
  // Retorna el total de likes que tienen todos los usuarios.
  // Ejemplo: in: (usuarios: [{ nombre: 'John', likes: 2 }, { nombre: 'Jane', likes: 3 }]) ~ out: => 5
  // Tu código:
  let total = 0

  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i]
    total += usuario.likes
  }

  return total
}

// let total = 0
// total = total + 2
// total = total + 3

// console.log(total)


function publicarPosts (posts) {
  // Retorna un array con los posts que tienen en su propiedad "estado" el valor de true.
  /* Ejemplo: in: (posts: [
    { titulo: '5 tips para programar mejor', estado: true },
    { titulo: 'La AI avanza muy rapido que da miedo', estado: false }
  ]) ~ out: => [{ titulo: '5 tips para programar mejor', estado: true }] */
  // Tu código:
  const publicados = []

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    if (post.estado) {
      publicados.push(post)
    }
  }

  return publicados
}

function eliminarProducto (productos, idProducto) {
  // Retorna un array sin el producto que tiene el id que llega por parámetro.
  /* Ejemplo: in: (productos: [
    { id: 1, nombre: 'Mouse' },
    { id: 2, nombre: 'Teclado' }
  ], idProducto: 2) ~ out: => [{ id: 1, nombre: 'Mouse' }] */
  // Tu código:
  const nuevoArr = []

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i]
    if (producto.id !== idProducto) {
      nuevoArr.push(producto)
    }
  }

  return nuevoArr
}

// const productos = [
//   { id: 1, nombre: 'Mouse' }, // 0
//   { id: 2, nombre: 'Teclado' } // 1
// ]

// const id = 2

// const nuevoArr = []

// for (let i = 0; i < productos.length; i++) {
//   const producto = productos[i]
//   // if (producto.id === id) {
//   //   productos.splice(i, 1)
//   // }
//   if (producto.id !== id) {
//     nuevoArr.push(producto)
//   }
// }

// console.log(nuevoArr)
// console.log(productos)

// ctrl + }

function buscarPersona (personas, correo) {
  // Retorna un objeto de la persona que tiene el correo que llega por parámetro.
  /* Ejemplo: in: (personas: [
    { nombre: 'John', correo: 'john@mail.com' },
    { nombre: 'Jane', correo: 'jane@mail.com' }
  ], 'jane@mail.com') ~ out: => { nombre: 'Jane', correo: 'jane@mail' } */
  // Tu código:
  for (let i = 0; i < personas.length; i++) {
    const persona = personas[i]
    if (persona.correo === correo) {
      return persona
    }
  }
}

// const personas = [
//   { nombre: 'John', correo: 'john@mail.com' },
//   { nombre: 'Jane', correo: 'jane@mail.com' }
// ]

// const correo = 'jane@mail.com'

// for (let i = 0; i < personas.length; i++) {
//   const persona = personas[i]
//   console.log(persona.correo)
//   if (persona.correo === correo) {
//     console.log(persona)
//   }
// }

function contarEstudiantesDeUnBootcamp (estudiantes, bootcamps, bootcamp) {
  // Retorna el número de estudiantes que pertenecen a un bootcamp en específico.
  /* Ejemplo: in: (estudiantes: [
    { nombre: 'John', bootcamp_id: 1 },
    { nombre: 'Jane', bootcamp_id: 2 },
    { nombre: 'Joe', bootcamp_id: 1 }
  ],  bootcamps: [
    { id: 1, nombre: 'Academlo' },
    { id: 2, nombre: 'Otros' }
  ], bootcamp: 'Academlo') ~ out: => 2 */
  // Tu código:
  const bootcampName = bootcamp
  let contador = 0

  for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i]
    for (let j = 0; j < bootcamps.length; j++) {
      const bootcamp = bootcamps[j]
      if (estudiante.bootcamp_id === bootcamp.id && bootcamp.nombre === bootcampName) {
        contador++
      }
    }
  }

  return contador
}

// const estudiantes = [
//   { nombre: 'John', bootcamp_id: 1 },
//   { nombre: 'Jane', bootcamp_id: 2 },
//   { nombre: 'Joe', bootcamp_id: 1 }
// ]

// const bootcamps = [
//   { id: 1, nombre: 'Academlo' },
//   { id: 2, nombre: 'Otros' }
// ]

// const bootcampName = 'Academlo'

// let contador = 0

// for (let i = 0; i < estudiantes.length; i++) {
//   const estudiante = estudiantes[i]
//   for (let j = 0; j < bootcamps.length; j++) {
//     const bootcamp = bootcamps[j]
//     if (estudiante.bootcamp_id === bootcamp.id && bootcamp.nombre === bootcampName) {
//       contador++
//     }
//   }
// }

// console.log(contador)

function serieMasVistas (series) {
  // Retorna el nombre de la serie que tiene más vistas.
  /* Ejemplo: in: (series: {
    'Dark': 50,
    'Game of Thrones': 10,
    'Black Mirror': 100,
    'Stranger Things': 80
  }) ~ out: => 'Black Mirror' */
  // Tu código:
  let max = 0
  let serie

  for (const prop in series) {
    if (series[prop] > max) {
      max = series[prop]
      serie = prop
    }
  }

  return serie
}

// const series = {
//   'Dark': 50,
//   'Game of Thrones': 10,
//   'Black Mirror': 100,
//   'Stranger Things': 180
// }

// let max = 0
// let serie

// for (const prop in series) {
//   console.log(series[prop])
//   if (series[prop] > max) {
//     max = series[prop]
//     serie = prop
//   }
// }

// console.log(serie)

// const frutas = ['manzana', 'pera', 'uva', 'mango']

// => for -> arreglos, rangos de números, tenemos índices, limite.
// for (let i = 0; i < frutas.length; i++) {
//   const fruta = frutas[i]
//   console.log(fruta)
// }

// => for of -> arreglos
// for (const fruta of frutas) {
//   // if (frutas.indexOf(fruta) === 2) break
//   console.log(fruta)
//   // no tenemos ínidices, pero podemos realizar estrategias para obtenerlos
//   // console.log(frutas.indexOf(fruta))
// }

// => for in -> objetos
// const persona = {
//   nombre: 'John',
//   edad: 20,
//   correo: 'john@correo.com'
// }

// console.log(persona['nombre'])

// for (const prop in persona) {
//   console.log(prop)
//   console.log(persona[prop])
// }

function estudiantesPorModulo (personas, modulos) {
  // Retorna un array de objetos con el nombre de la persona, el nombre del módulo y el correo.
  /* Ejemplo: in: (personas: [
    { nombre: 'Andrea', correo: 'Andrea@mail.com', modulo_id: 1 },
    { nombre: 'Diego', correo: 'Diego@mail.com', modulo_id: 2 },
    { nombre: 'Jesus', correo: 'Jesus@mail.com', modulo_id: 1 },
    { nombre: 'Laura', correo: 'Laura@mail.com', modulo_id: 3 },
    { nombre: 'Brayan', correo: 'Brayan@mail.com', modulo_id: 1}
  ], modulos: [
    { id:1, nombre: 'Fundamentos'},
    { id:2, nombre: 'React'},
    { id:3, nombre: 'Node'}
  ]) ~ out: => [{ nombre: 'Andrea', modulo: 'Fundamentos', correo: 'Andrea@mail.com', ...}] */
  // Tu código:
  const estudiantes = []

  for (let i = 0; i < personas.length; i++) {
    const persona = personas[i]
    for (let j = 0; j < modulos.length; j++) {
      const modulo = modulos[j]

      if (persona.modulo_id === modulo.id) {
        const nuevoEstudiante = {
          nombre: persona.nombre,
          modulo: modulo.nombre,
          correo: persona.correo
        }

        estudiantes.push(nuevoEstudiante)
      }
    }
  }

  return estudiantes
}

// const personas = [
//   { nombre: 'Andrea', correo: 'Andrea@mail.com', modulo_id: 1 },
//   { nombre: 'Diego', correo: 'Diego@mail.com', modulo_id: 2 },
//   { nombre: 'Jesus', correo: 'Jesus@mail.com', modulo_id: 1 },
//   { nombre: 'Laura', correo: 'Laura@mail.com', modulo_id: 3 },
//   { nombre: 'Brayan', correo: 'Brayan@mail.com', modulo_id: 1 }
// ]

// const modulos = [
//   { id: 1, nombre: 'Fundamentos' },
//   { id: 2, nombre: 'React' },
//   { id: 3, nombre: 'Node' }
// ]

// const estudiantes = []

// for (let i = 0; i < personas.length; i++) {
//   const persona = personas[i]
//   for (let j = 0; j < modulos.length; j++) {
//     const modulo = modulos[j]

//     if (persona.modulo_id === modulo.id) {
//       const nuevoEstudiante = {
//         nombre: persona.nombre,
//         modulo: modulo.nombre,
//         correo: persona.correo
//       }

//       estudiantes.push(nuevoEstudiante)
//     }
//   }
// }

// console.log(estudiantes)


/* Para el siguiente investiga sobre un método para arrays llamado arr.sort() */

function ordenaPorEdad (personas) {
  // Retorna un array de personas ordenadas por edad de menor a mayor.
  /* Ejemplo: in: (personas: [
    { nombre: 'Lukas', edad: 20 },
    { nombre: 'Maria', edad: 19 },
    { nombre: 'Marcos', edad: 21 }
  ]) ~ out: => [{ nombre: 'Maria', edad: 19 }, { nombre: 'Lukas', edad: 20 }, { nombre: 'Marcos', edad: 21 }] */
  // Tu código:
  return personas.sort(function (obj1, obj2) {
    return obj1.edad - obj2.edad
  })
}

// const persona = [
//   { nombre: 'Lukas', edad: 20 },
//   { nombre: 'Maria', edad: 19 },
//   { nombre: 'Marcos', edad: 21 }
// ]

// console.log(persona.sort(function (obj1, obj2) {
//   return obj1.edad - obj2.edad
// }))

// NO TOCAR ESTE CÓDIGO
module.exports = {
  contadorDeVocales,
  rangoDeNumeros,
  sumarNumerosDelArreglo,
  multiplosDeN,
  numeroMasGrande,
  contarColores,
  filtrarPorEdad,
  contarLikesDeUsuarios,
  publicarPosts,
  eliminarProducto,
  buscarPersona,
  contarEstudiantesDeUnBootcamp,
  serieMasVistas,
  estudiantesPorModulo,
  ordenaPorEdad
}
