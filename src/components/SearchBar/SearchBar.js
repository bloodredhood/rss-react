import React, { Component } from 'react';
import './SearchBar.css';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }
    componentDidMount() {
        const localStoreVal = window.localStorage.getItem('inputValue');
        localStoreVal === null
            ? window.localStorage.setItem('inputValue', this.state.inputValue)
            : this.setState({ inputValue: localStoreVal });
    }
    componentWillUnmount() {
        window.localStorage.setItem('inputValue', this.state.inputValue);
    }
    render() {
        return (React.createElement("div", { className: "search" },
            React.createElement("div", { className: "inputWrapper" },
                React.createElement("input", { type: "text", placeholder: "enter your words", value: this.state.inputValue, onChange: (e) => this.setState({ inputValue: e.target.value }) })),
            React.createElement("div", { className: "searchButton" }, "search")));
    }
}
export default SearchBar;
