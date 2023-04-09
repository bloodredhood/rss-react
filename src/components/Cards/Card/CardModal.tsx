import React from 'react';
import './CardModal.css';
import cross from '../../../assets/images/redcross.png';

interface Props {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
  close: () => void;
}

const CardModal = ({ id, name, status, species, gender, image, url, close }: Props) => {
  return (
    <div className="cardModal" onClick={close}>
      <div className="cardM" onClick={(e) => e.stopPropagation()}>
        <div onClick={close} className="crossWrapper">
          <img src={cross} alt="" />
        </div>
        <div className="content">
          <img src={image} alt="" />
          <p>id: {id}</p>
          <p>name: {name}</p>
          <p>status: {status}</p>
          <p>species: {species}</p>
          <p>gender: {gender}</p>
          <p>url: {url}</p>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
