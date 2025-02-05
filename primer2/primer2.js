// Function to shuffle and deal cards
export default function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1) {
    // Validate inputs
    if (!Number.isInteger(numPlayers) || numPlayers <= 0) {
        throw new Error("numPlayers must be a positive integer.");
    }
    if (!Number.isInteger(cardsPerPlayer) || cardsPerPlayer <= 0) {
        throw new Error("cardsPerPlayer must be a positive integer.");
    }
    if (!Number.isInteger(numDecks) || numDecks <= 0) {
        throw new Error("numDecks must be a positive integer.");
    }

    // Create the deck
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

    const createDeck = () => suits.flatMap(suit => ranks.map(rank => `${rank} of ${suit}`));
    let deck = Array(numDecks).fill(null).flatMap(createDeck);

    // Check if there are enough cards to deal
    const totalCardsNeeded = numPlayers * cardsPerPlayer;
    if (totalCardsNeeded > deck.length) {
        throw new Error(`Not enough cards in the deck. Requested ${totalCardsNeeded}, but only ${deck.length} available.`);
    }

    // Shuffle the deck using Fisher-Yates algorithm (O(n) time complexity)
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    };
    shuffle(deck);

    // Deal cards
    const hands = Array.from({ length: numPlayers }, () => []);
    for (let i = 0; i < cardsPerPlayer; i++) {
        for (let j = 0; j < numPlayers; j++) {
            hands[j].push(deck.pop());
        }
    }

    return hands;
}

// Example usage
const game = shuffleAndDeal(4, 5);
console.log(game);

/*
Example Output:
[
  ["Ace of Spades", "3 of Clubs", "7 of Diamonds", "Jack of Hearts", "Queen of Spades"],
  ["2 of Diamonds", "5 of Hearts", "6 of Clubs", "9 of Spades", "King of Diamonds"],
  ["4 of Hearts", "8 of Clubs", "10 of Spades", "Jack of Diamonds", "Queen of Clubs"],
  ["Ace of Clubs", "3 of Diamonds", "5 of Spades", "7 of Hearts", "10 of Clubs"]
]
*/
