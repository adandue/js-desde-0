/*
this --- class
this --- object --- class
*/

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const person1 = new Person('Adan', 36)
console.log(person1)

person1.newMethod = () => console.log(`My name is ${this.name}`)
person1.newMethod()