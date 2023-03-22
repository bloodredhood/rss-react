import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Cards from './Cards';

describe('Cards', () => {
  it('render cards', async () => {
    render(<Cards />);
    const cards = await screen.findByTestId('cards');
    expect(cards).toBeInTheDocument();
  });
});
