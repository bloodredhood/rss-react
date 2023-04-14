import React from 'react';
import { render, screen } from '@testing-library/react';
import CardForm from './CardForm';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('form renders', () => {
  it('has checkbox', () => {
    render(
      <Provider store={store}>
        <CardForm />
      </Provider>
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  it('has button', () => {
    render(
      <Provider store={store}>
        <CardForm />
      </Provider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
