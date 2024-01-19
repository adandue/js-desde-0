/*

Juguemos a adivinar la palabra.

El usuario tiene tres intentos para adivinar la palabra oculta

Requerimientos

-El juego debe tener una palabra oculta
-El juego puede dar una pista de la palabra
-El usuario debe ingresar una suposición
-El juego debe verificar si la suposición del usuario es correcta
-El juego debe tener un número limitado de intentos 
-El juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos

*/

let palabraOculta = 'Tigre'
let intentos = 3;


const darPista = () => {
    alert('La palabra es un felino')
}

const verificarSuposicion = (suposicion, palabraOculta) => {
    if(suposicion.toLowerCase() === palabraOculta.toLowerCase()) {
        return true
    }
    return false
}

const adivinaLaPalabra = () => {
    alert('Bienvenido a jugar Adivina la Palabra oculta')
    alert('Tienes 3 intentos para adivinar la palabra')
    while(intentos > 0) {
        let suposicion = prompt('Adivina la palabra')
        if(verificarSuposicion(suposicion, palabraOculta)) {
            alert('Correcto!, Has adivinado la palabra')
            break
        } else {
            intentos--
            if(intentos > 0) {
                alert(`Incorrecto , te queda ${intentos} intentos restantes`)
            } else {
                alert(`Lo siento ya no tienes intentos, la palabra oculta era ${palabraOculta}`)
                break
            }
        }
    }
}


const buttonPista = document.querySelector('#button-pista').addEventListener('click', darPista)
const buttonJuego = document.querySelector('#button-juego').addEventListener('click', adivinaLaPalabra)