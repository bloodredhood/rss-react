import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
describe('header', () => {
    it('renders about us', () => {
        render(React.createElement(BrowserRouter, null,
            React.createElement(Header, null)));
        expect(screen.getByRole('link', { name: /about us/i })).toBeTruthy();
    });
});
