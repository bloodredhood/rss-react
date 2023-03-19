import React, { Component } from 'react';
import { ProductI } from '../Cards';
import './Card.css';

class Card extends Component<ProductI> {
  constructor(props: ProductI) {
    super(props);
  }
  render() {
    return (
      <div className="card" id={this.props.id}>
        <div className="head">{this.props.name}</div>
        <div className="body">
          <div className="imageWrapper">
            <img src={this.props.image} alt={this.props.name} />
          </div>
          <div className="bodyChar">
            <div className="charItem">
              <div className="charItemStatic">Processor</div>
              <div className="charItemDynamic">{this.props.processor}</div>
            </div>
            <div className="charItem">
              <div className="charItemStatic">RAM</div>
              <div className="charItemDynamic">{this.props.ram}</div>
            </div>
            <div className="charItem">
              <div className="charItemStatic">Graphic Card</div>
              <div className="charItemDynamic">{this.props.graphics}</div>
            </div>
            <div className="charItem">
              <div className="charItemStatic">Disk</div>
              <div className="charItemDynamic">{this.props.disk}</div>
            </div>
          </div>
        </div>
        <div className="cardFootWrapper">
          <div className="cardFoot">
            <div className={this.props.isAvailible ? 'availible' : 'unavailible'}>
              {this.props.isAvailible ? 'Availible' : 'Unavailible'}
            </div>
            <div className="price">{this.props.price} zl</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
