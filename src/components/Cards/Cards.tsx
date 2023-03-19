import React, { Component, CSSProperties } from 'react';
import Card from './Card/Card';
import { GridLoader } from 'react-spinners';
import './Cards.css';

export interface ProductI {
  id: string;
  name: string;
  processor: string;
  ram: string;
  disk: string;
  graphics: string;
  isAvailible: boolean;
  price: number;
  image: string;
}

const override: CSSProperties = {
  marginTop: '30vh',
};

class Cards extends Component<object, { data: Array<ProductI>; isLoading: boolean }> {
  constructor(props: object) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount(): void {
    fetch('../../../data.json')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          //timeout for show how loader works until data loading
          this.setState({ data: data.product, isLoading: false });
        }, 1000);
      });
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
      <div className="cardsWrap">
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
