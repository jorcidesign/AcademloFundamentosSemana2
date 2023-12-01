/*
===========================
  * Operadores Lógicos *
===========================
*/
// Los operadores lógicos en JavaScript se utilizan para realizar operaciones lógicas entre expresiones booleanas. Si un valor no es un booleano, se convierte a booleano para la evaluación y el valor es retornado en su forma original, sin la conversión.

// Operadores Lógicos OR (||), AND (&&), NOT (!), ?? (Nullish Coalescing)

// Operador OR (||)
// - Busca el primer valor verdadero y lo devuelve, o el último si no lo encuentra.

// Valores truthy y falsys:
// - Falsy: false, 0, '', null, undefined, NaN.
// - Truthy: cualquier valor diferente a falsy.

// Ejemplo:
// '' || 0 || 10 || false
// f     f     t      f
console.log('' || 0 || 10 || false)
console.log(null || undefined || '' || NaN)
console.log(null || 'X' || '' || NaN)

// Cortocircuito:
// - Si el primero es verdadero lo devuelve, caso contrario devuelve el último valor.
function sum (a, b) {
  a = a || 0
  b = b || 0
  return a + b
}

const resultado = sum(5, 8)
console.log(resultado)

// registro de usuarios
const nombre = 'Juan'
const email = 'juan@correo.com'

console.log(`Bienvenido ${nombre || email || 'Invitado'}`)

// Condicionales:
// - También se puede utilizar para condicionales.
if (true || false) {
  console.log('pasa')
}
// - Hay 4 posibles combinaciones:
// 1. false || false => false
// 2. false || true => true
// 3. true || false => true
// 4. true || true => true

// => Operador AND (&&)
// - Busca el primer valor falso y lo devuelve, o el último si no lo encuentra.
// Ejemplo:
console.log(true && false && 10 && 0)
console.log(true && 'abc' && 45 && 'x')
console.log(null && false && 0 && '')

// Condicionales:
// - También se puede utilizar para condicionales.
if (true && true) {
  console.log('pasa')
}
// - Posibles combinaciones:
// 1. false && false => false
// 2. false && true => false
// 3. true && false => false
// 4. true && true => true

// Precedencia de operadores:
// - La precedencia de && es mayor que ||.
// - La precedencia NOT (!) es mayor que && y ||.
console.log(null || !0 && 4 || true)
console.log(true && 4)
console.log(null || 4 || true)

// => Operador NOT (!)
// - Niega el valor booleano.
// Ejemplo:
console.log(!true)
console.log(!false)

// Falsys: false, 0, '', null, undefined, NaN.
const campo = 'abc'

function dataForm (txt) {
  if (!txt) { // el campo no tiene un valor
    return 'Error llena el campo'
  }

  return 'Enviando datos...'
}

console.log(dataForm(campo))

// => Conversión explícita a booleano
// - Para convertir un valor a booleano se utiliza una doble negación (!!)
console.log(!!'')
console.log(!!' ')
console.log(!!0)
console.log(!!1)
console.log(!!null)

// => Nullish Coalescing Operator (??)
// - Devuelve el primer valor definido.
console.log(true || false || '' || 5)
console.log(true ?? false ?? '' ?? 5)

const altura = 0
// falsy: false, 0, '', null, undefined, NaN.
console.log(altura || 'Desconocido')

// nullish: null, undefined.
console.log(altura ?? 'Desconocido')

// No se debe comparar con los operadores || y &&. Se puede usar paréntesis.
console.log((null ?? !0) && 4 || true)