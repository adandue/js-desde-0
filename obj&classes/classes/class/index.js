class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    saludar() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const user1 = new User('Adan', 36)
user1.saludar()