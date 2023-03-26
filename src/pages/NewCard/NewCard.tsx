import React, { Component } from 'react';
import './NewCard.css';
import { FormCard } from '../../components/Form/tools';
import Form from '../../components/Form/Form';
import FormCardsList from '../../components/Form/FormCardsList';

interface NewCardStateI {
  cards: Array<FormCard>;
}

class NewCard extends Component<object, NewCardStateI> {
  state: NewCardStateI = {
    cards: [],
  };

  newCard(card: FormCard) {
    this.setState({ cards: [...this.state.cards, card] });
  }

  render() {
    return (
      <div className="newCardPage">
        <Form newCard={this.newCard.bind(this)} />
        <div className="formCardsListWrapper">
          {this.state.cards.map((card) => (
            <FormCardsList key={card.name} card={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default NewCard;
