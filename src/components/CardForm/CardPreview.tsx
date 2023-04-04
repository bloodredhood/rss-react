import React from 'react';
import './CardPreview.css';
import { Card } from '../../types';

interface Props {
  card: Card;
}

const CardPreview = (props: Props) => {
  return (
    <div className="formCard">
      <div className="formCardHead">{props.card.name}</div>
      <div className="formCardVerify">Info verified</div>
      <div className="formCardBody">
        <div className="formCardImageWrapper">
          <img src={props.card.image} alt={props.card.name} />
        </div>
      </div>
      <div className="formCardFootWrapper">
        <div className="formCardFoot">
          <div className={props.card.avail === 'avail' ? 'formAvailible' : 'formUnavailible'}>
            {props.card.avail === 'avail' ? 'Availible' : 'Unavailible'}
          </div>
          <div>{props.card.date}</div>
          <div>{props.card.type}</div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
