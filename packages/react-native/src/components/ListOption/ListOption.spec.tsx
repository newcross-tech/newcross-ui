import React from 'react';
import { render } from '@testing-library/react-native';
import ListOption, { ListOptionProps } from './ListOption';
import { ListOptionAlignment } from './ListOption.types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';

describe('List Option Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: ListOptionProps = {
      value: 'Option 1',
      onSelect: jest.fn(),
      selected: false,
      testID: 'list-option-component',
    };

    // Act
    const { getByText } = render(<ListOption {...props} />);

    // Assert
    expect(getByText(/option 1/i)).toBeTruthy();
  });

  it('renders successfully when alignment is set - CENTER', () => {
    // Arrange
    const props: ListOptionProps = {
      value: 'Option 1',
      alignText: ListOptionAlignment.CENTER,
      onSelect: jest.fn(),
      selected: false,
      testID: 'list-option-component',
    };

    // Act
    const { getByText } = render(<ListOption {...props} />);

    // Assert
    expect(getByText(/option 1/i)).toBeTruthy();
  });

  it('renders the left icon successfully', () => {
    // Arrange
    const props: ListOptionProps = {
      value: 'Option 1',
      leftIcon: <FontAwesomeIcon icon={faCheck} />,
      onSelect: jest.fn(),
      selected: false,
      testID: 'list-option-component',
    };

    // Act
    const { getByTestId } = render(<ListOption {...props} />);

    // Assert
    expect(getByTestId('list-option-left-icon')).toBeTruthy();
  });

  it('renders the right icon successfully', () => {
    // Arrange
    const props: ListOptionProps = {
      value: 'Option 1',
      rightIcon: <FontAwesomeIcon icon={faCheck} />,
      onSelect: jest.fn(),
      selected: false,
      testID: 'list-option-component',
    };

    // Act
    const { getByTestId } = render(<ListOption {...props} />);

    // Assert
    expect(getByTestId('list-option-right-icon')).toBeTruthy();
  });

  it('displays the check icon when selected and isMultipleSelect is true', () => {
    // Arrange
    const props: ListOptionProps = {
      value: 'Option 1',
      onSelect: jest.fn(),
      selected: true,
      isMultipleSelect: true,
      testID: 'list-option-component',
    };

    // Act
    const { getByTestId } = render(<ListOption {...props} />);

    // Assert
    expect(getByTestId('list-option-check-icon')).toBeTruthy();
  });
});
