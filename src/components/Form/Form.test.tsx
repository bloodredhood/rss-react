import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('form renders', () => {
  it('has checkbox', () => {
    render(
      <Form
        newCard={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  it('has button', () => {
    render(
      <Form
        newCard={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
