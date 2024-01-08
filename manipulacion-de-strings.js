//strings primitivos
const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo también')
console.log(typeof stringPrimitivoTambien) 

//strings tipo objeto
const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)

//Acceder a caracteres
const saludo = 'Hola. ¿Cómo estás?'
console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('Cómo'))
console.log(saludo.indexOf('como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3, 5))
console.log(saludo.length)
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())

const saludoDividido = saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludoConEspacios = ' Hola Mundo '
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios)

const saludoOriginal = 'Hola mundo'
const nuevoSaludo = saludoOriginal.replace('mundo', '😃')
console.log(nuevoSaludo)