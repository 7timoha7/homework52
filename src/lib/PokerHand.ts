import Card from "./Card";


class PokerHand {
  constructor(public fiveCard: Card[]) {
  }

  getOutcome() {
    const cards = this.fiveCard;
    console.log(cards);
    const numbersCard: Card[] = [];

    for (let i = 0; i < cards.length; i++) {

      if (cards[i].rank === 'J') {
        numbersCard.push(new Card(cards[i].suit, '11'))
      } else if (cards[i].rank === 'Q') {
        numbersCard.push(new Card(cards[i].suit, '12'))
      } else if (cards[i].rank === 'K') {
        numbersCard.push(new Card(cards[i].suit, '13'))
      } else if (cards[i].rank === 'A') {
        numbersCard.push(new Card(cards[i].suit, '14'))
      } else {
        numbersCard.push(new Card(cards[i].suit, cards[i].rank))
      }
    }

    let multipleCards = 0
    for (let i = 0; i < cards.length; i++) {
      for (let j = 0; j < cards.length; j++) {
        if (cards[i].rank === cards[j].rank && cards[i].suit !== cards[j].suit) {
          multipleCards++
        }
      }
    }
    let flush = 0;
    for (let i = 0; i < cards.length; i++) {
      for (let j = 0; j < cards.length; j++) {
        if (cards[i].suit === cards[j].suit && cards[i].rank !== cards[j].rank) {
          flush++
        }
      }
    }

    let straight: number[] = [];
    for (let i = 0; i < cards.length; i++) {
      let number = parseInt(numbersCard[i].rank);
      straight.push(number);
    }
    straight.sort((a, b) => {
      return a - b;
    });

    if (
      ((straight[1] - straight[0]) === 1 &&
        (straight[2] - straight[1]) === 1 &&
        (straight[3] - straight[2]) === 1 &&
        (straight[4] - straight[3]) === 1) &&
      (cards[0].suit === cards[1].suit &&
        cards[1].suit === cards[2].suit &&
        cards[2].suit === cards[3].suit &&
        cards[3].suit === cards[4].suit)
    ) {
      return 'Royal flush';
    } else if ((flush === 20) && (
      ((straight[1] - straight[0]) === 1 &&
        (straight[2] - straight[1]) === 1 &&
        (straight[3] - straight[2]) === 1 &&
        (straight[4] - straight[3]) === 1) ||
      ((straight[4] - straight[0]) === 12 &&
        (straight[1] - straight[0]) === 1 &&
        (straight[2] - straight[1]) === 1 &&
        (straight[3] - straight[2]) === 1)
    )
    ) {
      return 'Straight flush';
    } else if (multipleCards === 12) {
      return 'Four of a kind';
    } else if (multipleCards === 8) {
      return 'Full house';
    } else if (flush === 20) {
      return 'Flush';
    } else if (
      ((straight[1] - straight[0]) === 1 &&
        (straight[2] - straight[1]) === 1 &&
        (straight[3] - straight[2]) === 1 &&
        (straight[4] - straight[3]) === 1) ||
      ((straight[4] - straight[0]) === 12 &&
        (straight[1] - straight[0]) === 1 &&
        (straight[2] - straight[1]) === 1 &&
        (straight[3] - straight[2]) === 1)
    ) {
      return 'Straight';
    } else if (multipleCards === 2) {
      return 'One pair';
    } else if (multipleCards === 4) {
      return 'Two pairs';
    } else if (multipleCards === 6) {
      return 'Three of a kind';
    } else {
      return 'Senior card';
    }
  }
}


export default PokerHand;