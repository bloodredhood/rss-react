import React, { Component } from 'react';
import Card from './Card/Card';
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

class Cards extends Component<object, { data: Array<ProductI> }> {
  constructor(props: object) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount(): void {
    fetch('../../../public/data.json')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data.product });
      });
  }

  render() {
    return (
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
