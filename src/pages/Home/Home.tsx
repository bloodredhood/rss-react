import React, { FC } from 'react';
import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';
import { GridLoader } from 'react-spinners';
import './Home.css';
import { useAppSelector } from '../../hooks/redux';
import { useFetchCharsQuery } from '../../store/reducers/apiSlice';

const Home: FC = () => {
  const { inputValue } = useAppSelector((state) => state.searchReducer);
  const { data, isError, isLoading } = useFetchCharsQuery(inputValue);

  return (
    <div className="home">
      <SearchBar />
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
      {data && !isError ? <Cards data={data.results} /> : <h1>characters not found</h1>}
    </div>
  );
};

export default Home;
