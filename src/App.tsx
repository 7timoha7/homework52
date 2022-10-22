import React from 'react';
import CardView from "./СardView/СardView";
import CardDeck from "./lib/CardDeck";


function App() {

  const t = new CardDeck();

  // console.log(t.getCard());;
  console.log(t.getCards(5));


  return (
    <div className="App">
      <CardView rank={'10'} suit={'♥'}/>
    </div>
  );
}

export default App;
