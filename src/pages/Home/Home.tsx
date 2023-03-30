import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';
import React, { FC } from 'react';
import './Home.css';

const Home: FC = () => {
  return (
    <div className="home">
      <SearchBar />
      <Cards />
    </div>
  );
};

export default Home;
