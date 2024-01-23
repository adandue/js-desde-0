/*
Card game implementation

Imagine you're building a simple card game, You have an array representing a deck of cards, and you want to perform the following operations:
1. Shuffle the Deck: Randomly rearrange the order of the cards in the deck
2. Deal cards: Deal a specific number of cards to players from the top of the deck

This experience involves using splice() method to shuffle the deck and deal cards
*/

const deck = ['A♤', 'A♡', 'A♧', 'A♢','2♤', '2♡', '2♧', '2♢','3♤', '3♡', '3♧', '3♢','4♤', '4♡', '4♧', '4♢','5♤', '5♡', '5♧', '5♢','6♤', '6♡', '6♧', '6♢','7♤', '7♡', '7♧', '7♢','8♤', '8♡', '8♧', '8♢','9♤', '9♡', '9♧', '9♢','10♤', '10♡', '10♧', '10♢','J♤', 'J♡', 'J♧', 'J♢','Q♤', 'Q♡', 'Q♧', 'Q♢','K♤', 'K♡', 'K♧', 'K♢']

// Fisher-Yates Algorithm
const shuffleDeck = () => {
    for(let i = deck.length - 1; i > 0; i--) {
        // range [0, i] -> i + 1
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
}

const dealCards = (numCard) => {
    const dealCards = deck.splice(0, numCard)
    return dealCards
}

shuffleDeck()
const player1Hand = dealCards(5)
const player2Hand = dealCards(5)
const player3Hand = dealCards(5)

console.log('Player 1 Hand: ', player1Hand)
console.log('Player 2 Hand: ', player2Hand)
console.log('Player 3 Hand: ', player3Hand)