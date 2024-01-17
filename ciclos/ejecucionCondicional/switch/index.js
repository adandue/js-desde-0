/*

switch(expresión) {
    case valor1: 
        código a ejecutar
    break
    case valor2:
        código a ejecutar
    break
    case valorN:
        código a ejecutar
    break
    default:
        código
}

*/

let fruta = 'Manzanas'

switch(fruta) { //===
    case 'Naranjas':
        console.log('Las naranjas cuestan $20 el Kg')
    break
    case 'Manzanas':
        console.log('Las manzanas cuestan $43 el Kg')
    break
    case 'Plátanos':
        console.log('El plátano está en $30 el Kg')
    break
    case 'Mangos':
    case 'Papayas':
        console.log('La Papayas y los Mangos cuestan $25 el Kg')
    break
    default:
        console.log(`Lo siento no contamos con ${fruta}`)
}

console.log(`¿Hay algo más que desees?`)