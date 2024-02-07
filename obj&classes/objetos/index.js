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

console.log(persona)
console.log(persona.name)
persona.saludar()

persona.phone = "2225508896"
console.log(persona.phone)

persona.despedir = () => console.log(`Adiós`)
persona.despedir()

console.log(persona.address.street)

delete persona.phone