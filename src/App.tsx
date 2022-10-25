import React, {useState} from 'react';
import CardView from "./СardView/СardView";
import './App.css';
import cardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import PokerHand from "./lib/PokerHand";
import Combination from "./Combination/Combination";


function App() {
  const [card, setCard] = useState<Card[]>([]);
  const [combination, setCombination] = useState([
    '', ''
  ]);


  const dealCards = () => {
    const newDeck = new cardDeck();
    const fiveCards = newDeck.getCards(5);

    setCard(fiveCards);
    const combination = () => {
      const deck = []
      const pokerHand = new PokerHand(fiveCards);
      deck.push(pokerHand.getOutcome());
      deck.push(String(newDeck.massiveDeck()))
      return deck
    }
    setCombination(combination);
  }

  if (!card.length) {
    return (
      <div className="App">
        <button className='btn' onClick={dealCards}>Deal cards</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <button className='btn' onClick={dealCards}>Deal cards</button>
        <div className='box'>
          <CardView rank={card[0].rank} suit={card[0].suit}/>
          <CardView rank={card[1].rank} suit={card[1].suit}/>
          <CardView rank={card[2].rank} suit={card[2].suit}/>
          <CardView rank={card[3].rank} suit={card[3].suit}/>
          <CardView rank={card[4].rank} suit={card[4].suit}/>
        </div>
        <div className='combination'>
          <Combination combination={combination[0]} deck={combination[1]}/>
        </div>

      </div>
    );
  }
}

export default App;
