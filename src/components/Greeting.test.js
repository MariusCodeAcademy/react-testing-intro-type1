import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders main title hello world', () => {
  // Arrange
  render(<Greeting />);
  //Act

  //Assert
  const headingEl = screen.getByText('Hello World', { exact: false });
  expect(headingEl).toBeInTheDocument();
});
