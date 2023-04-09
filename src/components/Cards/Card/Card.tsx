import React, { useState } from 'react';
import './Card.css';
import { Character } from 'types';
import CardModal from './CardModal';

const Card = ({ id, name, status, species, gender, image, url }: Character) => {
  const [isModalShow, setIsModalShow] = useState(false);
  return (
    <>
      <div className="card" onClick={() => setIsModalShow(true)}>
        <div>
          <img src={image} alt={name} />
        </div>
        <div>{name}</div>
      </div>
      {isModalShow && (
        <CardModal
          id={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          image={image}
          url={url}
          close={() => setIsModalShow(false)}
        />
      )}
    </>
  );
};

export default Card;
