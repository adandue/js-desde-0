// Methods that modify the original array (Mutability)

//push()
const countries = ['USA', 'Canada', 'UK']
const newCountries = countries.push('Gernamany', 'Australia')

console.log(countries)
console.log(newCountries)

//pop()
const removedCountry = countries.pop()
console.log(countries)
console.log(removedCountry)

//Exercise Managing a Stack
let bookCart = []

const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

const viewCart = () => {
    console.log('Current cart of books', bookCart)
}

const performCartActions = (action, newBook) => {
    switch (action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook)
            break;
        case REMOVE_FROM_CART_ACTION:
            if(bookCart.length === 0) {
                console.log('Cart is empty. No books to remove')
            } else {
                const removedBook =bookCart.pop()
                console.log(`${removedBook} was removed`)
            }
            break;
        case VIEW_CART_ACTION:
            viewCart()
            break;
        default:
            console.log('Invalid action. Please chose a valid option')
            break;
    }
}

performCartActions(ADD_TO_CART_ACTION, 'Money: Master the Game')
performCartActions(VIEW_CART_ACTION)
performCartActions(ADD_TO_CART_ACTION, 'Atomic Habits')
performCartActions(VIEW_CART_ACTION)
performCartActions(ADD_TO_CART_ACTION, 'El sutil arte de que te importe un carajo')
performCartActions(VIEW_CART_ACTION)
performCartActions(ADD_TO_CART_ACTION, 'Inquebrantables')
performCartActions(VIEW_CART_ACTION)
performCartActions(REMOVE_FROM_CART_ACTION)
