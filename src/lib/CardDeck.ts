import Card from "./Card";

type CardX = {
  rank: string,
  suit: string
}


class CardDeck {
  public massDeck: CardX[] = [];
  public oneCard: CardX = {rank: 'default', suit: 'default'};
  public cardDenomination: string[] = [];
  public cardSuit: string[] = [];

  constructor() {
    this.cardDenomination = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.cardSuit = ['diams', 'hearts', 'clubs', 'spades'];

    this.cardDenomination.forEach(rank => {
      this.cardSuit.forEach(suit => {
        this.oneCard.rank = rank;
        this.oneCard.suit = suit;
        this.massDeck.push(this.oneCard);
      })
    })
  }


}

export default CardDeck