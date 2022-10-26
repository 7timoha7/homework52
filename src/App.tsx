import React, {useRef, useState} from 'react';
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

  const ref = useRef(card);

  const dealCards = () => {
    const newDeck = new cardDeck();
    const fiveCards = newDeck.getCards(5);
    ref.current = newDeck.massDeck;

    setCard(fiveCards);
    const combination = () => {
      const deck = [];
      const pokerHand = new PokerHand(fiveCards);
      deck.push(pokerHand.getOutcome());
      deck.push(String(ref.current.length));
      return deck;
    }
    setCombination(combination);
  }

  const replaceCard = (number:number)=>{

    const random = Math.floor(Math.random() * (ref.current.length));
    const oneCard = ref.current.splice(random, 1);
    console.log(oneCard);
    const fiveCard:Card[] = [...card];
    fiveCard.splice(number, 1, oneCard[0]);
    setCard(fiveCard);
    const combination = () => {
      const deck = [];
      const pokerHand = new PokerHand(fiveCard);
      deck.push(pokerHand.getOutcome());
      deck.push(String(ref.current.length));
      return deck;
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
          <div>
            <CardView rank={card[0].rank} suit={card[0].suit}/>
            <button className='btn_replace' onClick={() => replaceCard(0)} >Replace</button>
          </div>
          <div>
            <CardView rank={card[1].rank} suit={card[1].suit}/>
            <button className='btn_replace' onClick={() => replaceCard(1)} >Replace</button>
          </div>
          <div>
            <CardView rank={card[2].rank} suit={card[2].suit}/>
            <button className='btn_replace' onClick={() => replaceCard(2)} >Replace</button>
          </div>
          <div>
            <CardView rank={card[3].rank} suit={card[3].suit}/>
            <button className='btn_replace' onClick={() => replaceCard(3)} >Replace</button>
          </div>
          <div>
            <CardView rank={card[4].rank} suit={card[4].suit}/>
            <button className='btn_replace' onClick={() => replaceCard(4)} >Replace</button>
          </div>

        </div>
        <div className='combination'>
          <Combination combination={combination[0]} deck={combination[1]}/>
        </div>
      </div>
    );
  }
}

export default App;
