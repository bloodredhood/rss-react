import React, { Component } from 'react';
import { FormCard } from './tools';
import './FormCardsList.css';

interface FormCardsListPropsI {
  card: FormCard;
}

class FormCardsList extends Component<FormCardsListPropsI> {
  card: FormCard;
  constructor(props: FormCardsListPropsI) {
    super(props);
    this.card = this.props.card;
  }

  render() {
    return (
      <div className="formCard">
        <div className="formCardHead">{this.props.card.name}</div>
        <div className="formCardVerify">Info verified</div>
        <div className="formCardBody">
          <div className="formCardImageWrapper">
            <img src={this.props.card.image} alt={this.props.card.name} />
          </div>
        </div>
        <div className="formCardFootWrapper">
          <div className="formCardFoot">
            <div
              className={
                this.props.card.availibility === 'availible' ? 'formAvailible' : 'formUnavailible'
              }
            >
              {this.props.card.availibility === 'availible' ? 'Availible' : 'Unavailible'}
            </div>
            <div>{this.props.card.date}</div>
            <div>{this.props.card.type}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormCardsList;
