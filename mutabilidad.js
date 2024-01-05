// tipo de dato primitivo - Inmutable | valor
let numero = 23
numero = numero + 10
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

// tipo de dato complejo - mutable | referencia
let usuario = {
    nombre: 'Pepito',
    edad: 15
}
usuario.edad = 20
console.log(usuario)

let frutas = ['manzana', 'pera']
frutas[0] = 'sandia'
console.log(frutas)

const cambiarNombre = (objeto) => objeto.nombre = 'Nuevo nombre'

let persona = {
    nombre: 'Antonio'
}

cambiarNombre(persona)

console.log(persona)