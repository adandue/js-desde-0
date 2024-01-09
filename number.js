// 1. tipo entero y decimal
const entero = 23
const decimal = 3.14
console.log(typeof entero, typeof decimal)

// 2. Notación científica
const cientifico = 5e3
console.log(cientifico)

//3. Números infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

// Operaciones aritméticas
//1. Suma, resta, multiplicación, división
const suma = 3 + 4
const resta = 3 - 4
const multiplicacion = 3 * 4
const division = 3 / 4

//2. Módulo y exponenciación
const modulo = 15 % 8
const exponenciacion = 2 ** 3

// Precisión
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(2))
console.log(resultado === 0.3)

// Operaciones avanzada
const raizCuadrada = Math.sqrt(16)
console.log(raizCuadrada)
const valorAbsoluto = Math.abs(-7)
console.log(valorAbsoluto)
const aleatorio = Math.random()
console.log(aleatorio)