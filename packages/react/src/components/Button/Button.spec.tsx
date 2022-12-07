import { faChevronLeft } from '@fortawesome/pro-light-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fireEvent, render } from '@testing-library/react';
import { byRole, byTestId } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import Button, { ButtonProps } from './Button';

describe('Button', () => {
  const ui = {
    rightIcon: byTestId('right-icon'),
    leftIcon: byTestId('left-icon'),
    buttonRole: byRole('button'),
  };

  it('should not have any a11y errors', async () => {
    // Arrange
    const onClick = jest.fn();
    const props: ButtonProps = { children: 'Primary', onClick };

    // Act
    render(<Button {...props} />);

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

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
