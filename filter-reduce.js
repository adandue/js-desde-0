//Methods that iterate over an array
//Methods that DO NOT modify the original array (Immutability)

//filter()
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evenNumbers)

//reduce() case 1

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce)
console.log(sum)

//reduce() case 2
const words = ['Apple', 'Banana', 'Hello', 'Bye', 'Banana', 'Bye', 'Bye']
const reducedWords = words.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, [])

console.log(reducedWords)

/*
Exercise: Passing Grade Average

Create a program that takes an array of grades as input and calculates the average only for passing grades (greater than or equal to 70)
*/
const grades = [85, 92, 60, 78, 95, 66, 88, 50, 100, 94, 45, 69]

const passingGrades = grades.filter(grade => grade >= 70)

const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length

console.log('Original grades: ', grades)
console.log('Passing Grades: ', passingGrades)
console.log('Average Passing Grade: ',averagePassingGrade.toFixed(2))