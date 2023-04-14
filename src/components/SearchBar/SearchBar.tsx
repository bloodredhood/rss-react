import React, { useState, FormEvent } from 'react';
import { searchSlice } from '../../store/reducers/searchSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import './SearchBar.css';

const SearchBar = () => {
  const { inputValue } = useAppSelector((state) => state.searchReducer);
  const [value, setValue] = useState(inputValue);
  const { setInputValue } = searchSlice.actions;
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setInputValue(value));
  };

  return (
    <form className="search" onSubmit={onSubmit}>
      <div className="inputWrapper">
        <input
          type="search"
          placeholder="enter character's name"
          defaultValue={inputValue}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
