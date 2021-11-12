import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Arrange
  render(<App />);

  // Act
  // ....

  // Assert
  const linkElement = screen.getByText(/learn/i);
  expect(linkElement).toBeInTheDocument();
});
