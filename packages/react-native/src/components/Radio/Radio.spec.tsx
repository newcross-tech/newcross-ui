import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Radio, { RadioProps } from './Radio';

const renderComponent = (props: RadioProps) => {
  const { getByText, queryByTestId } = render(<Radio {...props} />);

  return { getByText, queryByTestId };
};

describe('Radio Component', () => {
  it('renders with given label and default view', () => {
    // Act
    const { getByText, queryByTestId } = renderComponent({ label: 'Hello' });

    // Assert
    expect(getByText(/hello/i)).toBeTruthy();
    expect(queryByTestId('radio-view')).toBeTruthy();
  });

  it(`doesn't show label when label value is not provided`, () => {
    // Act
    const { queryByTestId } = renderComponent({ label: undefined });

    // Assert
    expect(queryByTestId('radio-label')).toBeFalsy();
  });

  it(`doesn't show selected view when selected prop is false`, () => {
    // Act
    const { queryByTestId } = renderComponent({ selected: false });

    // Assert
    expect(queryByTestId('radio-selected-view')).toBeFalsy();
  });

  it(`shows selected view when selected prop is true`, () => {
    // Act
    const { queryByTestId } = renderComponent({ selected: true });

    // Assert
    expect(queryByTestId('radio-selected-view')).toBeTruthy();
  });

  it(`calls onPress when radio component is not disabled`, () => {
    // Arrange
    const onPress = jest.fn();

    // Act
    const { queryByTestId } = renderComponent({ disabled: false, onPress });

    const radio = queryByTestId('radio-view');

    fireEvent.press(radio);

    // Assert
    expect(onPress).toBeCalled();
  });

  it(`doesn't call onPress when radio component is disabled`, () => {
    // Arrange
    const onPress = jest.fn();

    // Act
    const { queryByTestId } = renderComponent({ disabled: true, onPress });

    const radio = queryByTestId('radio-view');

    fireEvent.press(radio);

    // Assert
    expect(onPress).not.toBeCalled();
  });

  it(`doesn't call onPress when onPress prop is not provided`, () => {
    // Arrange
    const onPress = jest.fn();

    // Act
    const { queryByTestId } = renderComponent({ disabled: false });

    const radio = queryByTestId('radio-view');

    fireEvent.press(radio);

    // Assert
    expect(onPress).not.toBeCalled();
  });
});
