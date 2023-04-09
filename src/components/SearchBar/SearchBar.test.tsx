import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchBar from './SearchBar';

it('renders with placeholder', () => {
  render(
    <SearchBar
      query={function (): void {
        throw new Error('invalid function');
      }}
    />
  );
  const input = screen.queryByPlaceholderText("enter character's name");
  expect(input).toBeInTheDocument();
});
