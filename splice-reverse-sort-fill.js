//Methods that modify the original array (Mutability)

//splice()
const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato']
const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion')

console.log(vegetables)
console.log(removedVegetables)

// reverse()

const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
const reverseNumbers = numbers.reverse()
console.log(reverseNumbers)

//sort() with numbers

const unsortedNumbers1 = [4, 18, 1, 62, 34]
console.log(unsortedNumbers1)
const unicodeSortedNumbers = unsortedNumbers1.sort()
console.log(unicodeSortedNumbers)
const unsortedNumbers2 = [4, 18, 1, 62, 34]
console.log(unsortedNumbers2)
const sortedNumbers = unsortedNumbers2.sort((a,b) => a-b)
console.log(sortedNumbers)
//4 - 18 = -14
//18 - 1 = 17

//sort() with strings UTF-16

const cities = ['New York', 'Paris', 'Tokyo', 'London']
console.log(cities)
const sortedCities = cities.sort()
console.log(sortedCities)

//fill()

const ages = [21, 35, 45, 50, 63]
console.log(ages.fill(0, 2, 4))
console.log(ages.fill(15, 1))
console.log(ages.fill(30))