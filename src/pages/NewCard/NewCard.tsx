import React, { FC, useEffect, useState } from 'react';
import CardForm from '../../components/CardForm/CardForm';
import CardPreview from '../../components/CardForm/CardPreview';
import { Card } from '../../types';
import './NewCard.css';

const NewCard: FC = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mockCard = {
    type: '',
    name: '',
    avail: '',
    date: '',
    verify: false,
    image: '',
  };
  const [cards, setCards] = useState<Array<Card>>([]);
  const [newCard, setNewCard] = useState<Card>(mockCard);

  useEffect(() => {
    if (newCard.verify !== false) {
      setCards([...cards, newCard]);
      setNewCard(mockCard);
    }
  }, [newCard, cards, mockCard]);

  return (
    <div className="newCardPage">
      <CardForm setNewCard={setNewCard} />
      <div className="formCardsListWrapper">
        {cards.length !== 0 ? cards.map((card, idx) => <CardPreview key={idx} card={card} />) : ''}
      </div>
    </div>
  );
};

export default NewCard;
