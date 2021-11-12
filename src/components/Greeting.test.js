import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting items on screen', () => {
  test('renders main title hello world', () => {
    // Arrange
    render(<Greeting />);
    //Act

    //Assert
    const headingEl = screen.getByText('Hello World', { exact: false });
    expect(headingEl).toBeInTheDocument();
  });

  test('renders part of paragraph "how to test"', () => {
    // Arrange
    render(<Greeting />);

    //Assert
    const partOfParag = screen.getByText(/how to test/i);
    expect(partOfParag).toBeInTheDocument();
  });
});
