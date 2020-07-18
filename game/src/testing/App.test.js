import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders score element', () => {
  const { getByText } = render(<App />);
  const scoreElement = getByText(/Score/i);
  expect(scoreElement).toBeInTheDocument();
});
