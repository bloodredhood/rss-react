import React from 'react';
import Card from './Card/Card';
import './Cards.css';
import { Character } from '../../types';

interface Props {
  data: Array<Character>;
}

const Cards = ({ data }: Props) => {
  return (
    <div className="cardsWrap" data-testid="cards">
      {data.map((el: Character) => (
        <Card
          key={`rim${el.id}`}
          id={el.id}
          name={el.name}
          status={el.status}
          species={el.species}
          gender={el.gender}
          image={el.image}
          url={el.url}
        />
      ))}
    </div>
  );
};

export default Cards;
