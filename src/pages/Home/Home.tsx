import React, { FC, useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';
import { GridLoader } from 'react-spinners';
import { Api } from '../../API/api';
import { Character } from 'types';
import './Home.css';

const Home: FC = () => {
  const [queryStr, setQueryStr] = useState(localStorage.getItem('inputValue') || '');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Array<Character>>([]);

  const query = (string: string) => {
    setQueryStr(string);
    setData([]);
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await Api.get(queryStr);
      setData(data.results);
      setIsLoading(false);
    };
    loadData();
  }, [queryStr]);

  return (
    <div className="home">
      <SearchBar query={query} />
      {isLoading && (
        <GridLoader
          color="#004d99"
          loading={isLoading}
          cssOverride={{
            margin: '100px 150px',
          }}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {data ? <Cards data={data} /> : <h1>characters not found</h1>}
    </div>
  );
};

export default Home;
