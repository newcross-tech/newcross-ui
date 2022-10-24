import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/pro-light-svg-icons/faChevronLeft';
import { byRole, byTestId } from 'testing-library-selector';

describe('Button', () => {
  const ui = {
    rightIcon: byTestId('right-icon'),
    leftIcon: byTestId('left-icon'),
    buttonRole: byRole('button'),
  };
  it('renders successfully', () => {
    // Act
    render(<Button />);

    // Assert
    expect(ui.buttonRole.get()).toBeInTheDocument();
  });
  it('triggers onClick successfully', () => {
    // Arrange
    const onClick = jest.fn();
    const props: ButtonProps = { children: 'Primary', onClick };

    // Act
    render(<Button {...props} />);

    fireEvent.click(ui.buttonRole.get());

    // Assert
    expect(onClick).toBeCalled();
  });

  it(`doesn't triggers onClick when button is disabled`, () => {
    // Arrange
    const onClick = jest.fn();
    const props: ButtonProps = { children: 'Primary', disabled: true, onClick };

    // Act
    render(<Button {...props} />);

    fireEvent.click(ui.buttonRole.get());

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
    expect(ui.leftIcon.get()).toBeTruthy();
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
    expect(ui.rightIcon.get()).toBeTruthy();
  });
});
