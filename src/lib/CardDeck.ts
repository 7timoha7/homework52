import Card from "./Card";

class CardDeck {
  public massDeck: Card[] = [];

  constructor(
    public cardDenomination = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    public cardSuit = ['diams', 'hearts', 'clubs', 'spades']
  ) {
    for (let i = 0; i < cardSuit.length; i++) {
      for (let r = 0; r < cardDenomination.length; r++) {
        this.massDeck.push(new Card(cardSuit[i], cardDenomination[r]));
      }
    }
  }

  massiveDeck() {
    return this.massDeck.length;
  }

  getCard() {
    const random = Math.floor(Math.random() * (this.massDeck.length));
    return this.massDeck.splice(random, 1)[0];

  }

  getCards(howMany: number) {
    const getCards = [];
    for (let i = 0; i < howMany; i++) {
      getCards.push(this.getCard())
    }

    // const getCards = [];
    // for (let i = 0; i < this.massDeck.length; i++) {
    //   if ((this.massDeck[i].rank === '10' && this.massDeck[i].suit === 'hearts') || (this.massDeck[i].rank === 'J' &&
    //     this.massDeck[i].suit === 'hearts') || (this.massDeck[i].rank === 'Q' &&
    //     this.massDeck[i].suit === 'hearts')||(this.massDeck[i].rank === 'A' &&
    //     this.massDeck[i].suit === 'hearts')||(this.massDeck[i].rank === 'K' && this.massDeck[i].suit === 'hearts') )
    //   getCards.push(this.massDeck[i]);
    // }
    return getCards
  }
}

export default CardDeck