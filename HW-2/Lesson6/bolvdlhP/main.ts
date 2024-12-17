interface Card {
    cardSuit: string;
    value: string;
    color: string;
}

let suits: string[] = ['spade', 'diamond', 'heart', 'club'];
let values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let cards: Card[] = [];
for (const suit of suits) {
    for (const value of values) {
        let card: Card = { cardSuit: suit, value: value, color: '' };

        // Визначення кольору карти
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }

        cards.push(card);
    }
}

console.log(cards);

// Заміна `find` на `filter`, оскільки `find` не підтримується в старіших бібліотеках
console.log(cards.filter(card => card.value === 'ace' && card.cardSuit === 'spade')[0]);
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' && card.value !== '7' && card.value !== '8' && card.value !== '9')));
