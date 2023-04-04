import React, { useEffect, useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      const localStoreVal = window.localStorage.getItem('inputValue');
      localStoreVal === null
        ? window.localStorage.setItem('inputValue', inputValue)
        : setInputValue(localStoreVal);
      setIsLoaded(true);
    }
    return window.localStorage.setItem('inputValue', inputValue);
  }, [isLoaded, inputValue]);

  return (
    <div className="search">
      <div className="inputWrapper">
        <input
          type="text"
          placeholder="enter your words"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="searchButton">search</div>
    </div>
  );
};

export default SearchBar;
