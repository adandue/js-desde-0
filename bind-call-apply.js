const owner = 'Adan'
const address = 'Benito Juárez 21'

function dogGreeting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}
const newHouse = {
    dogName: 'Luna'
}

dogGreeting.call(newHouse, owner, address)

const necessaryValues = [owner, address]
dogGreeting.apply(newHouse, necessaryValues)

const bindingWithBind = dogGreeting.bind(newHouse, owner, address)
bindingWithBind()