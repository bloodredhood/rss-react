import React, { Component, CSSProperties } from 'react';
import Card from './Card/Card';
import { GridLoader } from 'react-spinners';
import './Cards.css';
import product from '../../data.js';
import { ProductI } from '../../data.js';

const override: CSSProperties = {
  marginTop: '30vh',
};

class Cards extends Component<object, { data: Array<ProductI>; isLoading: boolean }> {
  constructor(props: object) {
    super(props);

    this.state = {
      data: product,
      isLoading: false,
    };
  }

  render() {
    return this.state.data.length === 0 ? (
      <GridLoader
        color="#004d99"
        loading={this.state.isLoading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    ) : (
      <div className="cardsWrap" data-testid="cards">
        {this.state.data.map((el: ProductI, idx: number) => (
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
  }
}

export default Cards;
