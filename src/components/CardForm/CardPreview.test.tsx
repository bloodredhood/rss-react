import { render, screen } from '@testing-library/react';
import React from 'react';
import { Card } from '../../types';
import CardPreview from './CardPreview';

const mockCard: Card = {
  type: 'PC',
  name: 'Name Name',
  avail: 'avail',
  date: '2022-11-11',
  verify: true,
  image: 'image',
};

it('should render', () => {
  render(<CardPreview card={mockCard} />);

  expect(screen.getByText(mockCard.type)).toBeInTheDocument();
  expect(screen.getByText(mockCard.name)).toBeInTheDocument();
});
