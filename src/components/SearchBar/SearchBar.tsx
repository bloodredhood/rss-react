import React, { useEffect, useState, FormEvent } from 'react';
import './SearchBar.css';

interface Props {
  query: (string: string) => void;
}

const SearchBar = ({ query }: Props) => {
  const [inputValue, setInputValue] = useState(localStorage.getItem('inputValue') || '');

  useEffect(() => {
    return () => localStorage.setItem('inputValue', inputValue || '');
  }, [inputValue]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    query(inputValue);
  };

  return (
    <form className="search" onSubmit={onSubmit}>
      <div className="inputWrapper">
        <input
          type="search"
          placeholder="enter character's name"
          defaultValue={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
