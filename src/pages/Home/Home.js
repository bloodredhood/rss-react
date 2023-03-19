import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';
import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
    render() {
        return (React.createElement("div", { className: "home" },
            React.createElement(SearchBar, null),
            React.createElement(Cards, null)));
    }
}
export default Home;
