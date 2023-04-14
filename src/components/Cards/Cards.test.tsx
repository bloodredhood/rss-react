import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './Card/Card';
import CardModal from './Card/CardModal';
import Cards from './Cards';

const mock = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: null,
  },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: '',
        url: '',
      },
      location: {
        name: '',
        url: '',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [''],
      url: '',
      created: '',
    },
    {
      id: 2,
      name: 'Jajabinx',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: '',
        url: '',
      },
      location: {
        name: '',
        url: '',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      episode: [''],
      url: '',
      created: '',
    },
  ],
};

describe('Card', () => {
  it('have name and avatar', () => {
    render(
      <Card
        id={mock.results[0].id}
        name={mock.results[0].name}
        status={mock.results[0].status}
        species={mock.results[0].species}
        gender={mock.results[0].gender}
        image={mock.results[0].image}
        url={mock.results[0].url}
      />
    );
    expect(screen.getByText(mock.results[0].name)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mock.results[0].image);
  });
});

describe('CardModal', () => {
  it('have name, status, species', () => {
    render(
      <CardModal
        id={mock.results[1].id}
        name={mock.results[1].name}
        status={mock.results[1].status}
        species={mock.results[1].species}
        gender={mock.results[1].gender}
        image={mock.results[1].image}
        url={mock.results[1].url}
        close={function (): void {
          throw new Error('invalid function');
        }}
      />
    );
    expect(screen.getByText(`name: ${mock.results[1].name}`)).toBeInTheDocument();
    expect(screen.getByText(`status: ${mock.results[1].status}`)).toBeInTheDocument();
    expect(screen.getByText(`species: ${mock.results[1].species}`)).toBeInTheDocument();
  });
});

describe('Cards', () => {
  it('render cards', async () => {
    render(<Cards data={mock.results} />);
    expect(screen.getAllByTestId('card').length).toBe(mock.results.length);
  });
});
