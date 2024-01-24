/* 
Exercise analysis
Transaction analysis
Imagine you have a list of financial transactions and you want to perform various data processing operations. Use the following instructions as a guide to complete the exercise:

1. Calculate total balance: Use the reduce method to calculate and display the total balance of all transactions
2. Find the largest Transaction (Income or Expanse): Utilize the reduce methods to find the transaction with the largest amount (either income or expanse) and display ir in the console
*/

const transactions = [
    {id: 1, description: 'walmart express', amount: -1186.58},  
    {id: 2, description: 'registro civil actas', amount: -750},  
    {id: 3, description: 'amazon', amount: -541.01},  
    {id: 4, description: 'amazon', amount: -868},  
    {id: 5, description: 'predial', amount: -164.53},  
    {id: 6, description: 'nebulizador', amount: -306.83},  
    {id: 7, description: 'alexa', amount: -433},  
    {id: 8, description: 'amazon', amount: 1519.50},  
    {id: 9, description: 'sams', amount: -1180.53},  
    {id: 10, description: 'amazon', amount: -1519.50},  
    {id: 11, description: 'amazon', amount: -309.98},  
    {id: 12, description: 'amazon', amount: -369},  
    {id: 13, description: 'bluey', amount: -2050},  
    {id: 14, description: 'walmart express', amount: -1049.99},  
    {id: 15, description: 'Yeni', amount: -5200},  
    {id: 16, description: 'andal', amount: 3085.06},  
    {id: 17, description: 'andal', amount: 1601.27},  
    {id: 18, description: 'andal', amount: 3423.08},  
    {id: 19, description: 'andal', amount: 8928.90},  
    {id: 20, description: 'andal', amount: 5194.82},  
    {id: 21, description: 'justo', amount: 2950},  
    {id: 22, description: 'oxxo', amount: -70},  
    {id: 23, description: 'uber eats', amount: -314},  
    {id: 24, description: 'cfe', amount: -1253},  
    {id: 25, description: 'cfe2', amount: -789},  
    {id: 26, description: 'spotify', amount: -199},  
    {id: 27, description: 'uber eats', amount: -358}  
]

//1. Calculate total balance

const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
console.log('Total Balance:', totalBalance)

//2. Find the largest transaction

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])
console.log('Largest Transaction: ', largestTransaction)

//3. filter purchase transactions
const purchaseTransactions = transactions.filter(transaction => transaction.amount < 0)
console.log(purchaseTransactions)