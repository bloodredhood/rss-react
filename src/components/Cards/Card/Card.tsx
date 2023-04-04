import React from 'react';
import { ProductI } from '../../../types';
import './Card.css';

const Card = ({
  id,
  name,
  processor,
  ram,
  disk,
  graphics,
  isAvailible,
  price,
  image,
}: ProductI) => {
  return (
    <div className="card" id={id}>
      <div className="head">{name}</div>
      <div className="body">
        <div className="imageWrapper">
          <img src={image} alt={name} />
        </div>
        <div className="bodyChar">
          <div className="charItem">
            <div className="charItemStatic">Processor</div>
            <div className="charItemDynamic">{processor}</div>
          </div>
          <div className="charItem">
            <div className="charItemStatic">RAM</div>
            <div className="charItemDynamic">{ram}</div>
          </div>
          <div className="charItem">
            <div className="charItemStatic">Graphic Card</div>
            <div className="charItemDynamic">{graphics}</div>
          </div>
          <div className="charItem">
            <div className="charItemStatic">Disk</div>
            <div className="charItemDynamic">{disk}</div>
          </div>
        </div>
      </div>
      <div className="cardFootWrapper">
        <div className="cardFoot">
          <div className={isAvailible ? 'availible' : 'unavailible'}>
            {isAvailible ? 'Availible' : 'Unavailible'}
          </div>
          <div className="price">{price} zl</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
