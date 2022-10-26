import '../cards.css';

interface CardViewProps {
  rank: string;
  suit: string;
}

const CardView: React.FC<CardViewProps> = props => {
  let suit: string = '';
  switch (props.suit) {
    case 'diams':
      suit = '♦'
      break;
    case 'hearts':
      suit = '♥'
      break;
    case 'clubs':
      suit = '♣'
      break;
    case 'spades':
      suit = '♠'
      break;
    default :
      break;
  }

  const cardClass = 'card rank-' + (props.rank.toLowerCase()) + ' ' + props.suit;
  return (

    <div className='card_box'>
      <div className="playingCards faceImages">
        <span className={cardClass}>
          <span className="rank">{props.rank}</span>
          <span className="suit">{suit}</span>
        </span>
      </div>
    </div>
  )
}

export default CardView;