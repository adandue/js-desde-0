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
