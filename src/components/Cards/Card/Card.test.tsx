import { render, screen } from '@testing-library/react';
import React from 'react';
import { ProductI } from '../../../data';
import Card from './Card';

const mockCard: ProductI = {
  id: 'id',
  name: 'name',
  processor: 'processor',
  ram: 'ram',
  disk: 'disk',
  graphics: 'graphics',
  isAvailible: true,
  price: 2137,
  image: 'image',
};

it('should have processor', () => {
  render(
    <Card
      id={mockCard.id}
      name={mockCard.name}
      processor={mockCard.processor}
      ram={mockCard.ram}
      disk={mockCard.disk}
      graphics={mockCard.graphics}
      isAvailible={mockCard.isAvailible}
      price={mockCard.price}
      image={mockCard.image}
    />
  );

  expect(screen.getByText(mockCard.processor)).toBeInTheDocument();
  expect(screen.getByText(mockCard.ram)).toBeInTheDocument();
});
