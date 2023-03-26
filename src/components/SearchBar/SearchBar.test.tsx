import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchBar from './SearchBar';

it('renders with placeholder', () => {
  render(<SearchBar />);
  const input = screen.queryByPlaceholderText('enter your words');
  expect(input).toBeInTheDocument();
});
