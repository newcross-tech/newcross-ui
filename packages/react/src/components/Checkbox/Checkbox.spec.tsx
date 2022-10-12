import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox, { CheckboxProps } from './Checkbox';
import { CheckboxType } from './Checkbox.types';

const renderComponent = (props: CheckboxProps) => {
  const customProps: CheckboxProps = {
    label: 'Label',
    checked: true,
    ...props,
  };

  render(<Checkbox {...customProps} />);
};

describe('Checkbox Component', () => {
  it('renders successfully', () => {
    // Arrange

    // Act
    renderComponent({});

    // Assert
    expect(screen.getByText(/label/i)).toBeTruthy();
  });

  it('renders indeterminate checkbox successfully', () => {
    // Arrange
    const props: CheckboxProps = {
      type: CheckboxType.INDETERMINATE,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(screen.getByText(/label/i)).toBeTruthy();
  });

  it('renders a disabled checkbox successfully', () => {
    // Arrange
    const props: CheckboxProps = {
      disabled: true,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(screen.getByText(/label/i)).toBeTruthy();
  });

  it('renders an unchecked checkbox successfully', () => {
    // Arrange
    const props: CheckboxProps = {
      checked: false,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(screen.queryByTestId('checkmark-icon')).toBeFalsy();
  });

  it('renders a checkbox with a default checkmark successfully', () => {
    // Arrange
    const props: CheckboxProps = {};

    // Act
    renderComponent({ ...props });

    // Assert
    expect(screen.getByText(/label/i)).toBeTruthy();
    expect(screen.getByTestId('checkmark-icon')).toBeTruthy();
  });

  it('fires an onClick event to check the checkbox successfully', () => {
    // Arrange
    const props: CheckboxProps = {
      testID: 'checkbox-component',
    };

    // Act
    renderComponent({ ...props });
    const checkbox = screen.getByTestId('checkbox-component');
    fireEvent.click(checkbox);

    // Assert
    expect(screen.getByTestId('checkmark')).toBeTruthy();
  });

  it('onClick event wont be called when the checkbox is disabled ', () => {
    // Arrange
    const props: CheckboxProps = {
      testID: 'checkbox-component',
      disabled: true,
    };
    const onClick = jest.fn();
    // Act
    renderComponent({ ...props });
    const checkbox = screen.getByTestId('checkbox-component');
    fireEvent.click(checkbox);

    // Assert
    expect(onClick).not.toHaveBeenCalled();
  });
  it('renders successfully when control props are passed and act upon', () => {
    // Arrange
    const onChange = jest.fn();
    const props: CheckboxProps = {
      testID: 'checkbox-component',

      onChange,
    };

    // Act
    renderComponent({ ...props });
    fireEvent.click(screen.getByTestId('checkbox-component'));

    // Assert
    expect(screen.getByTestId('checkbox-component')).toBeTruthy();
    expect(screen.getByTestId('checkmark')).toBeTruthy();
  });
});
