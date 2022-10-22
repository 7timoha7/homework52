import React from "react";


interface CardViewProps {
  rank: string
  suit: string
}


// const card = new Card('clubs', '2');

const CardView: React.FC<CardViewProps> = props => {

  let t: string = '';

  switch (props.suit) {
    case '♦':
      t = 'diams'
      break;
    case '♥':
      t = 'hearts'
      break;
    case '♣':
      t = 'clubs'
      break;
    case '♠':
      t = 'spades'
      break;
  }

  const cardClass = 'card rank-' + (props.rank.toLowerCase()) + ' ' + t;
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