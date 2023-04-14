import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

it('renders with placeholder', () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  const input = screen.queryByPlaceholderText("enter character's name");
  expect(input).toBeInTheDocument();
});
