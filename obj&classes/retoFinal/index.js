/*
Requerimientos del reto:
1. El usuario debe poder ingresas su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y constraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timline del usuario
4.  Si el usuario y contraseña son incorrectos, el sistema debe mostrar  un mensaje de error y no mostrar ningún timeline
*/

const usersDatabase = [
    {
        username:"andres",
        password:"123",
    },
    {
        username:"caro",
        password:"456",
    },
    {
        username:"mariana",
        password:"789",
    },
];

const usersTimeline = [
    {
        username:"Estefany",
        timeline:"Me encata Javascript!",
    },
    {
        username:"Oscar",
        timeline:"Bebeloper es lo mejor!",
    },
    {
        username:"Mariana",
        timeline:"A mi me gusta más el café que el té",
    },
    {
        username:"Andres",
        timeline:"Yo hoy no quiero trabajar",
    },
];

const username = prompt('¿Cuál es tu usuario?')
const password = prompt('¿Cuál es tu contraseña?')

const existentUser = (username, password) => {
    for(let i = 0; i < usersDatabase.length; i++) {
        if(usersDatabase[i].username === username && usersDatabase[i].password === password) {
            return true;
        }
    }
    return false;
}

const singIn = (username, password) => {
    if(existentUser(username, password)) {
        alert(`Bienvenido/a a tu cuenta ${username}`)
        console.log(usersTimeline)
    } else {
        alert('Ooops incorrect username or password')
    }
}

singIn (username, password)