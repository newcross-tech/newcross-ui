import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react-native';
import { native } from '@newcross-ui/design-tokens';
import CheckboxGroup, { CheckboxGroupProps } from './CheckboxGroup';

const { CheckboxErrorBackgroundColor } = native.healthforce;

describe('CheckboxGroup Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: CheckboxGroupProps = {
      options: [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
      ],
    };

    // Act
    render(<CheckboxGroup {...props} />);

    // Assert
    expect(screen.getByText('Select All')).toBeDefined();
    expect(screen.getByText('A')).toBeDefined();
    expect(screen.getByText('B')).toBeDefined();
  });

  it('disables only child checkbox when its disabled props is true but select all remains enabled', () => {
    // Arrange
    const props: CheckboxGroupProps = {
      options: [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b', disabled: true },
      ],
    };

    // Act
    render(<CheckboxGroup {...props} />);

    // Assert
    expect(screen.getByText('Select All')).toBeDefined();
    expect(screen.getByText('A')).toBeDefined();
    expect(
      screen.getByTestId('checkbox-group-all').props.pointerEvents
    ).toEqual('auto');
    expect(
      screen.getByTestId('checkbox-group-child-1').props.pointerEvents
    ).toEqual('none');
  });

  it('shows error style for both child and select all checkboxes', () => {
    // Arrange
    const props: CheckboxGroupProps = {
      options: [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b', hasError: true },
      ],
    };

    // Act
    render(<CheckboxGroup {...props} />);

    // Assert
    expect(
      screen.getByTestId('checkbox-group-all-checkmark').props.style
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          borderColor: CheckboxErrorBackgroundColor,
        }),
      ])
    );

    expect(
      screen.getByTestId('checkbox-group-child-1-checkmark').props.style
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          borderColor: CheckboxErrorBackgroundColor,
        }),
      ])
    );
  });

  it('returns onChange with value of selected checkbox when one or more is pressed', () => {
    // Arrange
    const onChange = jest.fn();

    const props: CheckboxGroupProps = {
      options: [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
        { label: 'C', value: 'c' },
      ],
      onChange,
    };

    // Act
    render(<CheckboxGroup {...props} />);

    fireEvent.press(screen.getByTestId('checkbox-group-child-1'));
    fireEvent.press(screen.getByTestId('checkbox-group-child-2'));

    // Assert
    expect(onChange).toHaveBeenCalledWith(['b', 'c']);
  });

  it('returns onChange with all values when select all is pressed', () => {
    // Arrange
    const onChange = jest.fn();

    const props: CheckboxGroupProps = {
      options: [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
        { label: 'C', value: 'c' },
      ],
      onChange,
    };

    // Act
    render(<CheckboxGroup {...props} />);

    fireEvent.press(screen.getByTestId('checkbox-group-all'));

    // Assert
    expect(onChange).toHaveBeenCalledWith(['a', 'b', 'c']);
  });
});
