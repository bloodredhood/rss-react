import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Cards from './Cards';
describe('Cards', () => {
    it('render cards', async () => {
        render(React.createElement(Cards, null));
        const cards = await screen.findByTestId('cards');
        expect(cards).toBeInTheDocument();
    });
});
// describe('Spinner', () => {
//   it('shows spinner when data loading', async () => {
//     render(<Cards />);
//     const spinner = await screen.findByTestId('loader');
//     expect(spinner).toBeInTheDocument();
//   });
// });
