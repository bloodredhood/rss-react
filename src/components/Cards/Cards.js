import React, { Component } from 'react';
import Card from './Card/Card';
import { GridLoader } from 'react-spinners';
import './Cards.css';
import cards from '../../data.json';
const override = {
    marginTop: '30vh',
};
class Cards extends Component {
    constructor(props) {
        super(props);
        console.log(cards.product);
        this.state = {
            data: cards.product,
            isLoading: false,
        };
    }
    render() {
        return this.state.data.length === 0 ? (React.createElement(GridLoader, { color: "#004d99", loading: this.state.isLoading, cssOverride: override, size: 30, "aria-label": "Loading Spinner", "data-testid": "loader" })) : (React.createElement("div", { className: "cardsWrap", "data-testid": "cards" }, this.state.data.map((el, idx) => (React.createElement(Card, { key: idx, id: el.id, name: el.name, processor: el.processor, ram: el.ram, disk: el.disk, graphics: el.graphics, isAvailible: el.isAvailible, price: el.price, image: el.image })))));
    }
}
export default Cards;
