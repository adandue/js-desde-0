//Methods that iterate over an array
//Methods that DO NOT modify the original array (Immutability)

//find()
const multiplesOf5 = [5, 10, 15, 20, 25, 30]
const firstNumberGreaterThan10 = multiplesOf5.find(number => number > 10)

console.log(multiplesOf5)
console.log(firstNumberGreaterThan10)

//findIndex()
const randomNumbers = [3, 6, 4, 2, 12, 45, 89, 6, 5]
const indexNumber = randomNumbers.findIndex(number => number > 50)

console.log(randomNumbers)
console.log(indexNumber)