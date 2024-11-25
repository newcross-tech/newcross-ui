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
    renderComponent({});
    expect(ui.button.get()).toBeInTheDocument();
  });

  it('triggers onClick successfully', () => {
    const onClick = jest.fn();
    renderComponent({ onClick });
    fireEvent.click(ui.button.get());
    expect(onClick).toBeCalled();
  });

  it(`doesn't trigger onClick when button is disabled`, () => {
    const onClick = jest.fn();
    renderComponent({ onClick, disabled: true });
    fireEvent.click(ui.button.get());
    expect(onClick).not.toBeCalled();
  });

  it('renders successfully with left icon only', () => {
    const props: ButtonProps = {
      leftIcon: <FontAwesomeIcon icon={faChevronLeft} />,
      testID: 'button',
      children: undefined,
    };
    renderComponent(props);
    expect(ui.centerIcon.get()).toBeInTheDocument(); // Icon-only case
  });

  it('renders successfully with right icon only', () => {
    const props: ButtonProps = {
      rightIcon: <FontAwesomeIcon icon={faChevronRight} />,
      testID: 'button',
      children: undefined,
    };
    renderComponent(props);
    expect(ui.centerIcon.get()).toBeInTheDocument(); // Icon-only case
  });

  it('renders successfully with both left and right icons and text', () => {
    const props: ButtonProps = {
      leftIcon: <FontAwesomeIcon icon={faChevronLeft} />,
      rightIcon: <FontAwesomeIcon icon={faChevronRight} />,
      children: 'Button with Icons',
    };
    renderComponent(props);
    expect(ui.leftIcon.get()).toBeInTheDocument();
    expect(ui.rightIcon.get()).toBeInTheDocument();
    expect(ui.button.get()).toHaveTextContent('Button with Icons');
  });

  it('applies fullWidth styles when fullWidth is true', () => {
    renderComponent({ fullWidth: true });
    const button = ui.button.get();
    expect(button).toHaveStyle({ width: '100%' });
  });

  it('applies correct padding based on size', () => {
    renderComponent({ size: 'small' });
    const button = ui.button.get();
    expect(button).toHaveStyle({ paddingLeft: 'md', paddingRight: 'md' });

    renderComponent({ size: 'large' });
    expect(button).toHaveStyle({ paddingLeft: 'lg', paddingRight: 'lg' });
  });

  it('renders correctly when no children, leftIcon, or rightIcon are provided', () => {
    renderComponent({});
    const button = ui.button.get();
    expect(button).toBeInTheDocument();
    expect(button).not.toContainHTML('<svg>');
  });
});
