import React from 'react';
import { render, screen } from '@testing-library/react';
import CardForm from './CardForm';

describe('form renders', () => {
  it('has checkbox', () => {
    render(
      <CardForm
        addNewCard={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  it('has button', () => {
    render(
      <CardForm
        addNewCard={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
