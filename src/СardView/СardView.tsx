import React from "react";


interface CardViewProps {
  rank: string
  suit: string
}


// const card = new Card('clubs', '2');

const CardView: React.FC<CardViewProps> = props => {
  let suit: string = '';
  switch (props.suit) {
    case '♦':
      suit = 'diams'
      break;
    case '♥':
      suit = 'hearts'
      break;
    case '♣':
      suit = 'clubs'
      break;
    case '♠':
      suit = 'spades'
      break;
  }

  const cardClass = 'card rank-' + (props.rank.toLowerCase()) + ' ' + suit;
  return (
    <div className="playingCards faceImages">
        <span className={cardClass}>
          <span className="rank">{props.rank}</span>
          <span className="suit">{props.suit}</span>
        </span>
    </div>
  )
}

export default CardView;