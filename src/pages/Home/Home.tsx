import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';
import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <SearchBar />
        <Cards />
      </div>
    );
  }
}

export default Home;
