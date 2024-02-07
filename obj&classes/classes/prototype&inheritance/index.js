/*
clases
funciones constructoras

métodos
propiedades

prototype
    metodos heredados
    propiedades heredados
*/

class Animal {
    constructor(name, type) {
        this.name = name
        this.type = type
    }
    emitSound() {
        console.log(`The ${this.type} emits a sound`)
    }
}

class Dog extends Animal {
    constructor(name, type, breed) {
        super(name, type)
        this.breed = breed
    }
    emitSound() {
        console.log(`${this.name} barks`)
    }
    run() {
        console.log(`${this.name} runs`)
    }
}

const dog1 = new Dog ('Yuki', 'Dog', 'Akita')
console.log(dog1)
dog1.run()
dog1.emitSound()

const racoon = new Animal('Rocket', 'Racoon')
racoon.emitSound()