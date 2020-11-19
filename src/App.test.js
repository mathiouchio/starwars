import { render, screen } from '@testing-library/react';
import App from './App';

test('renders starwars no crash', () => {
  render(<App />);
  const linkElement = screen.getByText(/StarWars/i);
  expect(linkElement).toBeInTheDocument();
});
