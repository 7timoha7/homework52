import React from "react";

interface CombinationProps {
  combination: string;
  deck: string;
}

const Combination: React.FC<CombinationProps> = props => {
  return (
    <div>
      <div>{props.combination}</div>
      <div>-----------</div>
      <div>Deck: {props.deck}</div>
    </div>
  );
};


export default Combination