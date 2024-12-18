interface Card {
    cardSuit: string;
    value: string;
    color: string;
}

let suits :string[]= ['spade', 'diamond', 'heart', 'club'];
let values:string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let cards:Card[] = [];
for (const suit of suits) {
    for (const value of values) {
        let card:Card = {cardSuit: suit, value: value,color: ''}

        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card)
    }
}
console.log(cards)

interface CardGroups {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];
}
let reduce:CardGroups = cards.reduce((accum:CardGroups, card:Card):CardGroups => {
    if (card.cardSuit === 'spade') {
        accum.spades.push(card)
    } else if (card.cardSuit === 'diamond') {
        accum.diamonds.push(card)
    } else if (card.cardSuit === 'club') {
        accum.clubs.push(card)
    } else {
        accum.hearts.push(card)
    }
    return accum;

}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduce)