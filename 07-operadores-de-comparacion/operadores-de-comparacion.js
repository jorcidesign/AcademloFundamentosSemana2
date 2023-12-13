/*
=================================
  * Operadores de comparación *
=================================
*/
// Los operadores de comparación en JavaScript son utilizados para comparar dos valores y devolver un resultado booleano que indica si la comparación es verdadera o falsa.

// => Relacionales
// > Mayor que
console.log(5 > 3) // true
console.log(5 > 10) // false
// < Menor que
console.log(3 < 5) // true
console.log(10 < 5) // false
// >= Mayor o igual que
console.log(5 >= 5) // true > =
// <= Menor o igual que
console.log(0 <= 0)

// => Igualdad (comparación simple)
// - comparan los valores de dos expresiones
// == Igual que ==
// != Diferente de !=
console.log(10 == 10)
console.log(10 != 10)

// => Comparación de cadenas de texto:
// - Comparan el orden lexicográfico de los caracteres Unicode de las cadenas.
// - El orden lexicográfico es el orden alfabético de las cadenas.
console.log('A' > 'a')
console.log(65 > 97)
console.log('a' > 'z')

// => str.charCodeAt(índice/posición) -> Devuelve el valor Unicode del carácter
console.log('A'.charCodeAt())
console.log('a'.charCodeAt())

// Comparación mas compleja:
'tierra' > 'tierna' // Si coinciden, se compara el siguiente carácter
console.log('r'.charCodeAt())
console.log('n'.charCodeAt())
console.log('tierra' > 'tierna')
console.log('zzz' > 'ab') // la cadena mas corta es menor

// string > number
// El de igualdad convierte el tipo de dato a number implicitamente
console.log('15' == 15)
console.log('abc' == 1)

// Los relacionales comparan los valores individuales de cada cadena
console.log('15' > 10)
console.log('5' < '6')

// Boolean true = 1, false = 0 -> number
console.log(true > false)
console.log(0 == false)
console.log(1 == true)

// Regla de conversión númerica
// null -> 0 (para los relacionales null es igual a 0)
console.log(null > 0)
console.log(null < 1)
console.log(null >= 0)

// undefined -> null
// null y undefined son iguales entre ellos mismos, pero no a ningún otro valor
console.log(null == 0)
console.log(null == undefined)
console.log(null == null)
console.log(undefined == undefined)
console.log(undefined == 0)
console.log(null == '')

// NaN -> NaN
// NaN es el unico valor que no es igual a NADA
console.log(NaN == NaN)
console.log(NaN == '')
console.log(NaN == 0)
console.log(NaN == false)
console.log(NaN == true)

// Igualdad estricta (===)
// - Primero compara los tipos, si son diferentes, devuelve false. Si son iguales, se compara el valor
console.log('5' == 5) // comparción simple
console.log(true == 1)
console.log('5' === 5) // comparación estricta
console.log(true === 1)
console.log(5 === 5)
console.log('0' !== 0)

// => Precedencia de operadores:
// - Los operadores de comparación tienen una precedencia menor que los aritméticos.
console.log(5 + 5 == 10)
