import React, { CSSProperties, useEffect, useState } from 'react';
import Card from './Card/Card';
import { GridLoader } from 'react-spinners';
import './Cards.css';
import product from '../../data.js';
import { ProductI } from '../../types';

const override: CSSProperties = {
  marginTop: '30vh',
};

const Cards = () => {
  const [state, setState] = useState<Array<ProductI>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setState(product);
      setIsLoading(true);
    }
  }, [isLoading]);

  return state.length === 0 ? (
    <GridLoader
      color="#004d99"
      loading={isLoading}
      cssOverride={override}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  ) : (
    <div className="cardsWrap" data-testid="cards">
      {state.map((el: ProductI, idx: number) => (
        <Card
          key={idx}
          id={el.id}
          name={el.name}
          processor={el.processor}
          ram={el.ram}
          disk={el.disk}
          graphics={el.graphics}
          isAvailible={el.isAvailible}
          price={el.price}
          image={el.image}
        />
      ))}
    </div>
  );
};

export default Cards;
