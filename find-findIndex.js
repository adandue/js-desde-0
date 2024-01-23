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

/*
Exercise: Raffle Winner Verification Program

In this program, you can verify if a person is among the list of winners in a raffle. Simply input the name or ticket number, and the program will check and display the winner's information
*/

const winningParticipants = [
    { id: 1, name: 'Adan', ticketNumber: 857 },
    { id: 65, name: 'Vero', ticketNumber: 325 },
    { id: 72, name: 'Aurora', ticketNumber: 412 },
    { id: 98, name: 'Luis', ticketNumber: 623 },
    { id: 123, name: 'Pipis', ticketNumber: 789 },
    { id: 145, name: 'Sofi', ticketNumber: 32 },
    { id: 278, name: 'Luis Jr', ticketNumber: 2 },
    { id: 346, name: 'Alo', ticketNumber: 25 }
]

const findWinnerByName = (name) => {
    const winner = winningParticipants.find(participants => participants.name === name)
    return winner || 'No winner found with that name'
}

const findIndexWinnerByTicket = (ticketNumber) => {
    const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber)
    return index !== -1 ? index : 'No winner found with that ticket number'
}

const displayWinnerInformation = (winner) => {
    if (winner != undefined && winner != null && winner != 'No winner found with that name') {
        console.log('Winner information: ', winner)
    } else {
        console.log('No winner found')
    }
}

const winnerByName = findWinnerByName('Sofi')
const indexWinnerByTicket = findIndexWinnerByTicket(623)

displayWinnerInformation(winnerByName)
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket)