//How to create an Array?

//1. new Array() or Array()

const fruits = Array('apple', 'banana', 'orange')
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const numbers = Array(1, 2, 3, 4 ,5)
console.log(numbers)

//2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

const recipeIngedients = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk', quantity: '1 cup'
    },
    false
]

console.log(recipeIngedients)

//Accesing array elements

const firstFruit = fruits[0]
console.log(firstFruit)

//Length property

const numberOfFruits = fruits.length
console.log(numberOfFruits)