import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Checkbox, { CheckboxProps } from './Checkbox';
import { CheckboxType } from './Checkbox.types';

describe('Checkbox Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: CheckboxProps = {
      type: CheckboxType.CHECK,
      label: 'Label',
    };

    // Act
    const { getByText } = render(<Checkbox {...props} />);
    const checkbox = getByText(/label/i);

    // Assert
    expect(checkbox).toBeTruthy();
  });

  it('renders indeterminate checkkbox successfully', () => {
    // Arrange
    const props: CheckboxProps = {
      type: CheckboxType.INDETERMINATE,
      label: 'Label',
    };

    // Act
    const { getByText } = render(<Checkbox {...props} />);
    const checkbox = getByText(/label/i);

    // Assert
    expect(checkbox).toBeTruthy();
  });

  it('renders a disabled checkkbox successfully', () => {
    // Arrange
    const props: CheckboxProps = {
      type: CheckboxType.INDETERMINATE,
      label: 'Label',
      disabled: true,
    };

    // Act
    const { getByText } = render(<Checkbox {...props} />);
    const checkbox = getByText(/label/i);

    // Assert
    expect(checkbox).toBeTruthy();
  });

  it('renders a checkkbox with a default checkmark successfully', () => {
    // Arrange
    const props: CheckboxProps = {
      type: CheckboxType.CHECK,
      label: 'Label',
      defaultChecked: true,
    };

    // Act
    const { getByText, getByTestId } = render(<Checkbox {...props} />);
    const checkbox = getByText(/label/i);

    // Assert
    expect(checkbox).toBeTruthy();
    expect(getByTestId('checkmark')).toBeTruthy();
  });

  it('fires an onPress event to check the checkbox successfully', () => {
    // Arrange
    const props: CheckboxProps = {
      testID: 'checkbox-component',
      type: CheckboxType.CHECK,
      label: 'Label',
    };

    // Act
    const { getByTestId } = render(<Checkbox {...props} />);
    const checkbox = getByTestId('checkbox-component');
    fireEvent.press(checkbox);

    // Assert
    expect(getByTestId('checkmark')).toBeTruthy();
  });

  it('renders successfully when control props are passed and act upon', () => {
    // Arrange
    const onChange = jest.fn();
    const props: CheckboxProps = {
      testID: 'checkbox-component',
      type: CheckboxType.CHECK,
      label: 'Label',
      onChange,
      checked: true,
    };

    // Act
    const { getByTestId } = render(<Checkbox {...props} />);
    fireEvent.press(getByTestId('checkbox-component'));

    // Assert
    expect(getByTestId('checkbox-component')).toBeTruthy();
    expect(getByTestId('checkmark')).toBeTruthy();
  });
});
