import React, {useState} from 'react';
import CardView from "./СardView/СardView";
import './App.css';
import cardDeck from "./lib/CardDeck";
import Card from "./lib/Card";


function App() {
  const [card, setCard] = useState<Card[]>([])


  const dealCards = () => {
    const newDeck = new cardDeck();
    const fiveCards = newDeck.getCards(5);
    console.log(fiveCards);
    setCard(fiveCards);
  }

  // return (
  //     <div className="App">
  //       <button onClick={dealCards}>Deal cards</button>
  //     </div>
  //   );


  if (!card.length) {
    return (
      <div className="App">
        <button onClick={dealCards}>Deal cards</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <button onClick={dealCards}>Deal cards</button>
        <div className='box'>
          <CardView rank={card[0].rank} suit={card[0].suit}/>
          <CardView rank={card[1].rank} suit={card[1].suit}/>
          <CardView rank={card[2].rank} suit={card[2].suit}/>
          <CardView rank={card[3].rank} suit={card[3].suit}/>
          <CardView rank={card[4].rank} suit={card[4].suit}/>
        </div>
      </div>
    );
  }

  // return (
  //   <>
  //     <div className="playingCards faceImages">
  //
  //     <span className="card rank-k diams">
  //
  //       <span className="rank">K</span>
  //
  //     <span className="suit">♦</span>
  //
  //       </span>
  //     </div>
  //
  //     <CardView rank={card[1].rank} suit={card[1].suit}/>
  //
  //   </>
  //
  // )
}

export default App;
