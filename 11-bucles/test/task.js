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
}

function rangoDeNumeros (inicio, final) {
  // Retorna un rango de números entre el número inicial y el número final.
  // El número inicial siempre será menor que el número final.
  // Ejemplo: in: (inicio: 1, final: 5) ~ out: => [1, 2, 3, 4, 5]
  // Tu código:
}

function sumarNumerosDelArreglo (numeros) {
  // Retorna la sumatoria de todos los números de un array.
  // Ejemplo: in: (numeros: [1, 2, 3]) ~ out: => 6
  // Tu código:
}

function multiplosDeN (multiplo, final) {
  // Retorna los múltiplos de un número entre el número inicial y el número final sin incluir ambos números.
  // Ejemplo: in: (multiplo: 20, final: 100) ~ out: => [40, 60, 80]
  // Tu código:
}

function numeroMasGrande (numeros) {
  // Retorna el número más grande de un array.
  // Ejemplo: in: (numeros: [15, 2, 35, 26]) ~ out: => 35
  // Tu código:
}

function contarColores (colores) {
  // Retorna el número de veces que se repite un color en un array.
  // Ejemplo: in: (colores: ['rojo', 'azul', 'rojo', 'verde', 'azul', 'rojo']) ~ out: => { rojo: 3, azul: 2, verde: 1 }
  // Tu código:
}

function filtrarPorEdad (usuarios) {
  // Retorna un array con los usuarios que sean mayores de 20 pero menores de 30 años.
  /* Ejemplo: in: (usuarios: [
    { nombre: 'John', edad: 19 },
    { nombre: 'Jane', edad: 21 }
  ]) ~ out: => [{ nombre: 'Jane', edad: 21 }] */
  // Tu código:
}

function contarLikesDeUsuarios (usuarios) {
  // Retorna el total de likes que tienen todos los usuarios.
  // Ejemplo: in: (usuarios: [{ nombre: 'John', likes: 2 }, { nombre: 'Jane', likes: 3 }]) ~ out: => 5
  // Tu código:
}

function publicarPosts (posts) {
  // Retorna un array con los posts que tienen en su propiedad "estado" el valor de true.
  /* Ejemplo: in: (posts: [
    { titulo: '5 tips para programar mejor', estado: true },
    { titulo: 'La AI avanza muy rapido que da miedo', estado: false }
  ]) ~ out: => [{ titulo: '5 tips para programar mejor', estado: true }] */
  // Tu código:
}

function eliminarProducto (productos, idProducto) {
  // Retorna un array sin el producto que tiene el id que llega por parámetro.
  /* Ejemplo: in: (productos: [
    { id: 1, nombre: 'Mouse' },
    { id: 2, nombre: 'Teclado' }
  ], idProducto: 2) ~ out: => [{ id: 1, nombre: 'Mouse' }] */
  // Tu código:
}

function buscarPersona (personas, correo) {
  // Retorna un objeto de la persona que tiene el correo que llega por parámetro.
  /* Ejemplo: in: (personas: [
    { nombre: 'John', correo: 'john@mail.com' },
    { nombre: 'Jane', correo: 'jane@mail' }
  ], 'jane@mail.com') ~ out: => { nombre: 'Jane', correo: 'jane@mail' } */
  // Tu código:
}

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
}

function serieMasVistas (series) {
  // Retorna el nombre de la serie que tiene más vistas.
  /* Ejemplo: in: (series: {
    'Dark': 50,
    'Game of Thrones': 10,
    'Black Mirror': 100,
    'Stranger Things': 80
  }) ~ out: => 'Black Mirror' */
  // Tu código:
}

function estudiantesPorModulo (personas, modulos) {
  // Retorna un array de objetos con el nombre de la persona, el nombre del módulo y el correo.
  /* Ejemplo: in: (personas: [
    { nombre: 'Andrea', correo: 'Andrea@mail.com', modulo_id: 1 },
    { nombre: 'Diego', correo: 'Diego@mail.com', modulo_id: 2 },
    { nombre: 'Jesus', correo: 'Jesus@mail.com', modulo_id: 1 },
    { nombre: 'Laura', correo: 'Laura@mail.com', modulo_id: 3 },
    { nombre: 'Brayan', correo: 'Brayan@mail.com', modulo_id: 1}
  ], modulos: [
    {id:1, nombre: 'Fundamentos'},
    { id:2, nombre: 'React'},
    { id:3, nombre: 'Node'}
  ]) ~ out: => [{ nombre: 'Andrea', modulo: 'Fundamentos', correo: 'Andrea@mail.com', ...}] */
  // Tu código:
}

/* Para el siguiente investiga sobre un método para arrays llamado arr.sort() */

function ordenaPorEdad (personas) {
  // Retorna un array de personas ordenadas por edad de menor a mayor.
  /* Ejemplo: in: (personas: [
    { nombre: 'Lukas', edad: 20 },
    { nombre: 'Maria', edad: 19 },
    { nombre: 'Marcos', edad: 21 }
  ]) ~ out: => [{ nombre: 'Maria', edad: 19 }, { nombre: 'Lukas', edad: 20 }, { nombre: 'Marcos', edad: 21 }] */
  // Tu código:
}

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
