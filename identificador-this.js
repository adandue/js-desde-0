//Enlace implícito | Implicit binding

const house = {
    dogName: 'Yuki',
    dogGreeting: function () {
        console.log(`Hi, I'm ${this.dogName} and I'm cute`)
    }
}

house.dogGreeting()

//Enlace explícito | Explicit binding

function dogGreeting () {
    console.log(`Hi, I'm ${this.dogName} and I'm cute`)
}

const newHouse = {
    dogName: 'Luna',
    age: 7
}

dogGreeting.call(newHouse)

function newDogGreeting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}

const owner = 'Adan'
const address = 'Benito Juárez 21'
newDogGreeting.call(newHouse, owner, address)