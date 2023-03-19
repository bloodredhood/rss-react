import React, { Component } from 'react';
import './Card.css';
class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "card", id: this.props.id },
            React.createElement("div", { className: "head" }, this.props.name),
            React.createElement("div", { className: "body" },
                React.createElement("div", { className: "imageWrapper" },
                    React.createElement("img", { src: this.props.image, alt: this.props.name })),
                React.createElement("div", { className: "bodyChar" },
                    React.createElement("div", { className: "charItem" },
                        React.createElement("div", { className: "charItemStatic" }, "Processor"),
                        React.createElement("div", { className: "charItemDynamic" }, this.props.processor)),
                    React.createElement("div", { className: "charItem" },
                        React.createElement("div", { className: "charItemStatic" }, "RAM"),
                        React.createElement("div", { className: "charItemDynamic" }, this.props.ram)),
                    React.createElement("div", { className: "charItem" },
                        React.createElement("div", { className: "charItemStatic" }, "Graphic Card"),
                        React.createElement("div", { className: "charItemDynamic" }, this.props.graphics)),
                    React.createElement("div", { className: "charItem" },
                        React.createElement("div", { className: "charItemStatic" }, "Disk"),
                        React.createElement("div", { className: "charItemDynamic" }, this.props.disk)))),
            React.createElement("div", { className: "cardFootWrapper" },
                React.createElement("div", { className: "cardFoot" },
                    React.createElement("div", { className: this.props.isAvailible ? 'availible' : 'unavailible' }, this.props.isAvailible ? 'Availible' : 'Unavailible'),
                    React.createElement("div", { className: "price" },
                        this.props.price,
                        " zl")))));
    }
}
export default Card;
