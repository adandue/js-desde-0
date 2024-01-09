//NUll
const snoopy = null
console.log(snoopy)
console.log(typeof snoopy)

//Undefined
let name
console.log(name)

//Symbol
const uniqueId = Symbol('adan_due')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)

const ID = Symbol('adan_due')
let user = {}
user[ID] = '1234'

console.log(user)

// BigInt
const bigNumber = 2345789876542345678765432n
console.log(bigNumber)

const numberOfPaticulesInTheUniverse = 10000000000000000000000000000000000000n
console.log(numberOfPaticulesInTheUniverse)