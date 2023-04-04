import React, { FC, useState } from 'react';
import CardForm from '../../components/CardForm/CardForm';
import CardPreview from '../../components/CardForm/CardPreview';
import { Card } from '../../types';
import './NewCard.css';

const NewCard: FC = () => {
  const [cards, setCards] = useState<Array<Card>>([]);

  const addNewCard = (card: Card): void => {
    setCards([...cards, card]);
  };

  return (
    <div className="newCardPage">
      <CardForm addNewCard={addNewCard} />
      <div className="formCardsListWrapper">
        {cards.length !== 0 ? cards.map((card, idx) => <CardPreview key={idx} card={card} />) : ''}
      </div>
    </div>
  );
};

export default NewCard;
