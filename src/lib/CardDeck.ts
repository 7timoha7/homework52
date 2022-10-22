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

  getCard() {
    // console.log(this.massDeck);
    let randomNumber = Math.floor(Math.random() * (52 + 1));
    return this.massDeck.splice(randomNumber, 1);
  }

  getCards(howMany: number) {
    const getCards = [];
    for (let i = 0; i < howMany; i++) {
          getCards.push(this.getCard())
    }
    return getCards
  }


}

export default CardDeck