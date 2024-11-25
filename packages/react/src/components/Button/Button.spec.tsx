import { faChevronLeft } from '@fortawesome/pro-light-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fireEvent, render } from '@testing-library/react';
import { byRole, byTestId } from 'testing-library-selector';
import Button, { ButtonProps } from './Button';
import React from 'react';

const renderComponent = (customProps: Partial<ButtonProps>) => {
  const props = {
    children: 'Primary',
    ...customProps,
  };

  render(<Button {...props} />);
};

describe('Button', () => {
  const ui = {
    rightIcon: byTestId('right-icon'),
    leftIcon: byTestId('left-icon'),
    centerIcon: byTestId('center-icon'),
    button: byRole('button'),
  };

  it('renders successfully', () => {
    // Arrange
    renderComponent({});

    // Act
    const button = ui.button.get();

    // Assert
    expect(button).toBeInTheDocument();
  });

  it('triggers onClick successfully', () => {
    // Arrange
    const onClick = jest.fn();
    renderComponent({ onClick });

    // Act
    fireEvent.click(ui.button.get());

    // Assert
    expect(onClick).toBeCalled();
  });

  it(`doesn't trigger onClick when button is disabled`, () => {
    // Arrange
    const onClick = jest.fn();
    renderComponent({ onClick, disabled: true });

    // Act
    fireEvent.click(ui.button.get());

    // Assert
    expect(onClick).not.toBeCalled();
  });

  it('renders successfully with left icon only', () => {
    // Arrange
    const props: ButtonProps = {
      leftIcon: <FontAwesomeIcon icon={faChevronLeft} />,
      testID: 'button',
      children: undefined,
    };
    renderComponent(props);

    // Act
    const centerIcon = ui.centerIcon.get();

    // Assert
    expect(centerIcon).toBeInTheDocument(); // Icon-only case
  });

  it('renders successfully with right icon only', () => {
    // Arrange
    const props: ButtonProps = {
      rightIcon: <FontAwesomeIcon icon={faChevronRight} />,
      testID: 'button',
      children: undefined,
    };
    renderComponent(props);

    // Act
    const centerIcon = ui.centerIcon.get();

    // Assert
    expect(centerIcon).toBeInTheDocument(); // Icon-only case
  });

  it('renders successfully with both left and right icons and text', () => {
    // Arrange
    const props: ButtonProps = {
      leftIcon: <FontAwesomeIcon icon={faChevronLeft} />,
      rightIcon: <FontAwesomeIcon icon={faChevronRight} />,
      children: 'Button with Icons',
    };
    renderComponent(props);

    // Act
    const leftIcon = ui.leftIcon.get();
    const rightIcon = ui.rightIcon.get();
    const button = ui.button.get();

    // Assert
    expect(leftIcon).toBeInTheDocument();
    expect(rightIcon).toBeInTheDocument();
    expect(button).toHaveTextContent('Button with Icons');
  });

  it('applies fullWidth styles when fullWidth is true', () => {
    // Arrange
    renderComponent({ fullWidth: true });

    // Act
    const button = ui.button.get();

    // Assert
    expect(button).toHaveStyle({ width: '100%' });
  });

  it('applies correct padding for small size', () => {
    // Arrange
    renderComponent({ size: 'small' });

    // Act
    const buttonSmall = ui.button.get();

    // Assert
    expect(buttonSmall).toHaveStyle({ paddingLeft: 'md', paddingRight: 'md' });
  });

  it('applies correct padding for large size', () => {
    // Arrange
    renderComponent({ size: 'large' });

    // Act
    const buttonLarge = ui.button.get();

    // Assert
    expect(buttonLarge).toHaveStyle({ paddingLeft: 'lg', paddingRight: 'lg' });
  });

  it('renders correctly when no children, leftIcon, or rightIcon are provided', () => {
    // Arrange
    renderComponent({});

    // Act
    const button = ui.button.get();

    // Assert
    expect(button).toBeInTheDocument();
    expect(button).not.toContainHTML('<svg>');
  });
});
