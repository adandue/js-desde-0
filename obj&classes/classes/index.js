// let person = {
//     name: 'Adan',
//     lastName: 'Duenas',
//     age: 36
// }

function Person(name, lastName, age) {
    this.name = name
    this.lastName = lastName
    this.age = age
}

const person1 = new Person('Adan', 'Duenas', 36)
console.log(person1)

person1.nationality = 'Mexican'

const person2 = new Person('Vero', 'Montero', 32)
console.log(person2)

Person.prototype.saludar = function () {
    console.log(`Hi. my name is ${this.name} ${this.lastName}`)
}

person1.saludar()
person2.saludar()