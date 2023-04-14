import React, { FC } from 'react';
import CardForm from '../../components/CardForm/CardForm';
import CardPreview from '../../components/CardForm/CardPreview';
import './FormPage.css';
import { useAppSelector } from '../../hooks/redux';

const FormPage: FC = () => {
  const { cards } = useAppSelector((state) => state.formPageReducer);

  return (
    <div className="newCardPage">
      <CardForm />
      <div className="formCardsListWrapper">
        {cards.length !== 0 ? cards.map((card, idx) => <CardPreview key={idx} card={card} />) : ''}
      </div>
    </div>
  );
};

export default FormPage;
