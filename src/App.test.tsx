import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the logo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Songbook/i);
  expect(linkElement).toBeInTheDocument();
});
