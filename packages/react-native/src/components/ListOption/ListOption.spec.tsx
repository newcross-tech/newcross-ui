import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ListOption, { ListOptionProps } from './ListOption';
import { ListOptionAlignment } from './ListOption.types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/pro-regular-svg-icons';

describe('List Option Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: ListOptionProps = {
      optionText: 'Option 1',
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
      optionText: 'Option 1',
      alignText: ListOptionAlignment.CENTER,
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
      optionText: 'Option 1',
      leftIcon: <FontAwesomeIcon icon={faCheck} />,
      testID: 'list-option-component',
    };

    // Act
    const { getByTestId } = render(<ListOption {...props} />);

    // Assert
    expect(getByTestId('left-icon')).toBeTruthy();
  });

  it('renders the right icon successfully', () => {
    // Arrange
    const props: ListOptionProps = {
      optionText: 'Option 1',
      rightIcon: <FontAwesomeIcon icon={faCheck} />,
      testID: 'list-option-component',
    };

    // Act
    const { getByTestId } = render(<ListOption {...props} />);

    // Assert
    expect(getByTestId('right-icon')).toBeTruthy();
  });

  it('triggers onSelect when pressed and displays the check icon', () => {
    // Arrange
    const onSelect = jest.fn();
    const props: ListOptionProps = {
      optionText: 'Option 1',
      onSelect,
      testID: 'list-option-component',
    };

    // Act
    const { getByTestId } = render(<ListOption {...props} />);
    fireEvent.press(getByTestId('list-option-component'));

    // Assert
    expect(getByTestId('check-icon')).toBeTruthy();
  });
});
