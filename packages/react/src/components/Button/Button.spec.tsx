import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/pro-light-svg-icons/faChevronLeft';

describe('Button', () => {
  it('renders successfully', () => {
    // Act
    render(<Button />);

    // Assert
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('triggers onClick successfully', () => {
    // Arrange
    const onClick = jest.fn();
    const props: ButtonProps = { children: 'Primary', onClick };

    // Act
    render(<Button {...props} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    // Assert
    expect(onClick).toBeCalled();
  });

  it(`doesn't triggers onClick when button is disabled`, () => {
    // Arrange
    const onClick = jest.fn();
    const props: ButtonProps = { children: 'Primary', disabled: true, onClick };

    // Act
    render(<Button {...props} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    // Assert
    expect(onClick).not.toBeCalled();
  });
  it(`renders successfully when left icon prop is given`, () => {
    // Arrange
    const props: ButtonProps = {
      leftIcon: <FontAwesomeIcon icon={faChevronLeft} />,
      testID: 'button',
    };

    // Act
    render(<Button {...props} />);

    // Assert
    expect(screen.getByTestId('left-icon')).toBeTruthy();
  });
  it(`renders successfully when right icon prop is given`, () => {
    // Arrange
    const props: ButtonProps = {
      rightIcon: <FontAwesomeIcon icon={faChevronRight} />,
      testID: 'button',
    };

    // Act
    render(<Button {...props} />);

    // Assert
    expect(screen.getByTestId('right-icon')).toBeTruthy();
  });
});
