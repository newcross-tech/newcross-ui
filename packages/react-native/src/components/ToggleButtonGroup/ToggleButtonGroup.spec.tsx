import React from 'react';
import { render } from '@testing-library/react-native';
import ToggleButtonGroup, {
  getMultipleSelectedValues,
} from './ToggleButtonGroup';
import ToggleButton from '../ToggleButton/ToggleButton';
import { ToggleButtonGroupOrientation } from './ToggleButtonGroup.types';
import { calculateGap } from './ToggleButtonGroup';

describe('ToggleButtonGroup', () => {
  it('renders successfully', () => {
    // Arrange
    const props = {
      onSelect: jest.fn(),
      selectedValue: ['1'],
      testID: 'toggle-button-group',
    };

    // Act
    const { getByTestId } = render(
      <ToggleButtonGroup {...props}>
        <ToggleButton value="1">Sort</ToggleButton>
        <ToggleButton value="2">Date</ToggleButton>
      </ToggleButtonGroup>
    );
    // Assert
    expect(getByTestId('toggle-button-group')).toBeTruthy();
  });

  it('selects multiple toggle buttons when selectMultiple prop is given', () => {
    // Arrange
    const props = {
      onSelect: jest.fn(),
      selectedValue: ['1', '2'],
      selectMultiple: true,
      orientation: ToggleButtonGroupOrientation.horizontal,
    };
    // Act
    const { queryByTestId } = render(
      <ToggleButtonGroup {...props}>
        <ToggleButton testID="1" value="1">
          Sort
        </ToggleButton>
        <ToggleButton testID="2" value="2">
          Date
        </ToggleButton>
        <ToggleButton testID="3" value="3">
          Date
        </ToggleButton>
      </ToggleButtonGroup>
    );
    // Assert
    expect(queryByTestId('1-inset-shadow')).toBeTruthy();
    expect(queryByTestId('2-inset-shadow')).toBeTruthy();
    expect(queryByTestId('3-inset-shadow')).toBeFalsy();
  });

  it('selects a single toggle buttons when selectMultiple prop is false', () => {
    // Arrange
    const onSelect = jest.fn();
    const props = {
      onSelect: onSelect,
      selectedValue: '1',
      selectMultiple: false,
    };
    // Act
    const { queryByTestId } = render(
      <ToggleButtonGroup {...props}>
        <ToggleButton testID="1" value="1">
          Sort
        </ToggleButton>
        <ToggleButton testID="2" value="2">
          Date
        </ToggleButton>
        <ToggleButton testID="3" value="3">
          Date
        </ToggleButton>
      </ToggleButtonGroup>
    );

    // Assert
    expect(queryByTestId('1-inset-shadow')).toBeTruthy();
    expect(queryByTestId('2-inset-shadow')).toBeFalsy();
    expect(queryByTestId('3-inset-shadow')).toBeFalsy();
  });

  it('returns correct list of values when getMultipleSelectedValues is called', () => {
    // Arrange
    const value = '1';
    const selectedValues = ['1', '2'];

    // Act
    const result = getMultipleSelectedValues(value, selectedValues);

    // Assert
    expect(result).toEqual(['2']);
  });

  it('returns an empty array when selected value is not an array of strings', () => {
    // Arrange
    const value = '1';
    const selectedValues = '1';

    // Act
    const result = getMultipleSelectedValues(value, selectedValues);

    // Assert
    expect(result).toEqual([]);
  });

  it('returns a gap when the calculateGap function is called and orientation is vertical', () => {
    // Arrange
    const gap = 8;
    const isLastChild = false;
    const orientation = ToggleButtonGroupOrientation.vertical;

    // Act
    const marginBottom = calculateGap(gap, isLastChild, orientation);

    // Assert
    expect(marginBottom).toStrictEqual({ flex: 1, marginBottom: 8 });
  });

  it('returns a gap when the calculateGap function is called and orientation is horizontal', () => {
    // Arrange
    const gap = 8;
    const isLastChild = false;
    const orientation = ToggleButtonGroupOrientation.horizontal;

    // Act
    const marginRight = calculateGap(gap, isLastChild, orientation);

    // Assert
    expect(marginRight).toStrictEqual({ flex: 1, marginRight: 8 });
  });
});
