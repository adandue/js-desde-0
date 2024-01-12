// Funciones puras

//Side effects
//1. Modificar variables globales
//2. Modificar los parámetros de la función
//3. Solicitudes HTTP
//4. Impresiones de mensaje en pantalla o consola
//5. Manipulación del DOM (Document Object Model)
//6. Obtener la hora actual

function sum (a, b) {
    return a + b
}

//Funciones impuras

function sum2 (a, b) {
    console.log('a: ', a)
    return a + b
}

sum2(8 + 9)

let total = 0

function sumWithSideEffect (a) {
    total += a
    return total
}

sumWithSideEffect(6)

//Función pura

function square(x) {
    return x * x
}

//Función pura

function addTen (y) {
    return y +10
}

//Función pura

const number = 5 
const finalResult = addTen(square(number))
console.log(finalResult)