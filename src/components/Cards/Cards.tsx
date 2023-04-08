import React, { CSSProperties, useEffect, useState } from 'react';
import Card from './Card/Card';
import { GridLoader } from 'react-spinners';
import './Cards.css';
import { Character } from '../../types';

const override: CSSProperties = {
  marginTop: '30vh',
};

const Cards = () => {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
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
      {state.map((el: Character) => (
        <Card
          key={`got${el.id}`}
          id={el.id}
          url={el.url}
          name={el.name}
          gender={el.gender}
          culture={el.culture}
          born={el.born}
          died={el.died}
          titles={el.titles}
          aliases={el.aliases}
          father={el.father}
          mother={el.mother}
          spouse={el.spouse}
          allegiances={el.allegiances}
          books={el.books}
          povBooks={el.povBooks}
          tvSeries={el.tvSeries}
          playedBy={el.playedBy}
        />
      ))}
    </div>
  );
};

export default Cards;
