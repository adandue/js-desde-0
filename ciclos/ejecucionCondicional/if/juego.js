const numeroSecreto = Math.floor(Math.random() * 10 + 1)

const numeroJugador = parseInt(prompt('Adivina el número secretro entre el 1 y el 10'))

console.log(`Este es el número que escogiste ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log('¡Felicidades! Adivinaste el número secreto')
}   else if (numeroJugador < numeroSecreto) {
    console.log('El número es demasiado bajo, intenta de nuevo')
} else {
    console.log('El número es demasiado alto, intenta de nuevo')
}