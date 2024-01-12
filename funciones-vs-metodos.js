// Capacidades que tienen las funciones al igual que otros objetos

//1. Pasar funciones como argumentos - callback
const a = () => {}
const b = (a) => {}
b(a)

//retornar funciones

const a2 = () => {
    const b2 = () => {}
    return b2
}

//asignar funciones a variables
const a3 = function() {}
const a4 = () => {}

//Tener propiedades y métodos
function a5 () {}
    const obj = {}
    a5.call(obj)

//Anidar funciones --> Nested functions

const a6 = () => {
    const b6 = () => {
        const c6 = () => {}
        c6()
    }
    b6()
}
a6()

//Almacenar funciones en objetos
//Método

const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage () {
        console.log('💥')
    }
}
rocket.launchMessage()