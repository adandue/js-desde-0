/*

for in ---> objetos

propiedades = valor

array, strings

item

for (variable in objeto) {
    código a ejecutar
}

*/

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

for (fruta in listaDeCompras) {
    console.log(fruta)
}

for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}

for (fruta of listaDeCompras) {
    console.log(fruta)
}