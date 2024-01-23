//Methods that iterate over an array
//Methods that DO NOT modify the original array (Immutability)

//map()

const numbers = [1, 2, 3, 4, 5]
const squareNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squareNumbers)

//forEach()

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

/*
Fahrenheit to celsius conversion
*/

const temperaturesFahrenheit = [32, 68, 95, 104, 212]
const temperaturesCelsius = temperaturesFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log('Temperatures in Fahrenheit: ', temperaturesFahrenheit)
console.log('Temperatures in Celsius: ', temperaturesCelsius)

//Sum of elements in an Array

let sum = 0
numbers.forEach(number => {
    sum += number
})

console.log('Array of numbers: ', numbers)
console.log('Sum of numbers: ', sum)