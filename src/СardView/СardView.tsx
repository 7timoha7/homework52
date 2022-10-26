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

  // const replace = () => {
  //   const newDeck = new cardDeck();
  //   console.log(newDeck.massDeck);
  //   newDeck.getCard()
  //   console.log(newDeck.getCard());
  //   // const ref = useRef(card)
  // }

  const cardClass = 'card rank-' + (props.rank.toLowerCase()) + ' ' + props.suit;
  return (

    <div className='card_box'>
      <div className="playingCards faceImages">
        <span className={cardClass}>
          <span className="rank">{props.rank}</span>
          <span className="suit">{suit}</span>
        </span>
      </div>
      {/*<button className='btn_replace' onClick={replace}>Replace</button>*/}
    </div>
  )
}

export default CardView;