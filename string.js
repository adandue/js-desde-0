// Creación de strings
const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas dobles"
const terceraOpcion = `Template literals`

// 1. Concatenación: Opción +

const direccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi drección completa es ' + direccion + ', ' + ciudad

console.log(direccionCompleta)

// 2. Concatenación con template literals
const nombre = 'Adán'
const pais = '🇲🇽'
const presentacion = `Hola soy ${nombre} y soy de ${pais}`
console.log(presentacion)

// 3. Concatenación con join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = '🇲🇽'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

// 4. Concatenación con concat()
const hobbie1 = '🎮'
const hobbie2 = '⚽'
const hobbie3 = '🏏'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3, '.')
console.log(hobbies)

//Caracteres de escape
//const whatDoIDo = 'I'm Software engineer'

//1. Escape alternativo
const escapeAlternativo = "I'm Software engineer"

//2. Barra invertida
const escapeBarraInvertida = 'I\'m Software engineer'

//3. template literals
const escapeTemplateLiterals = `I'm Software engineer`

//Escritura de strings largos
/*
    Las rosas son rojas,
    las violetas son azules,
    Caracter inesperado,
    en las línea 86.
*/

const poema = 'Las rosas son rojas,\n' +
            'las violetas son azules,\n' +
            'caracter inesperado,\n' +
            'en la línea 86.'

            console.log(poema)
            
const poema2 = 'Las rosas son rojas,\n\
las violetas son azules,\n\
caracter inesperado,\n\
en la línea 86.'
console.log(poema2)

const poema3 = `Las rosas son rojas,
las violetas son azules,
caracter inesperado,
en la línea 86.`
console.log(poema3)