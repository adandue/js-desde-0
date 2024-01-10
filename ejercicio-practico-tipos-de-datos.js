// Social media profile

//1. User information
const username = 'adan_due'
const fullName = 'Adan Duenas'
const age = 36
const isStudent = true

// 2. Address
const address = {
    street: 'Benito Juárez',
    city: 'Puebla',
    state: 'Puebla',
    country: 'México',
    zipCode: 72595
}

// 3. Hobbies
const hobbies = ['Play the guitar', 'Singing', 'Gaming']

// 4. Generating personalized bio

const bio = `Hi, my name is ${fullName}, also known as ${username}. I'm ${age} an currently live in the city of ${address.city} in ${address.country}. I love to ${hobbies.join(', ')}`

// 5. Print the user profile an bio
console.log(bio)