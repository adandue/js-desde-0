/*

estructura de datos

key / value

objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor,
}

*/

const persona = {
    name: 'Adan',
    age: 36,
    address: {
        street: 'B Juarez 21',
        city: 'Puebla'
    },
    saludar () {
        console.log(`Hola mi nombre es ${persona.name}`)
    }
}