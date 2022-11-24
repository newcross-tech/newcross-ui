import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import FloatingActionButton, {
  FloatingActionButtonProps,
} from './FloatingActionButton';
import { FABVariant } from './FloatingActionButton.types';

describe('FloatingActionButton Component', () => {
  it('renders successfully with icon only', () => {
    // Act
    const { getByTestId } = render(<FloatingActionButton />);
    const button = getByTestId(/floating-action-button/i);

    // Assert
    expect(button).toBeTruthy();
  });
  it('renders successfully with icon with text', () => {
    // Arrange
    const props: FloatingActionButtonProps = {
      variant: FABVariant.iconWithText,
      text: 'Label',
    };

    // Act
    const { getByTestId, getByText } = render(
      <FloatingActionButton {...props} />
    );
    const button = getByTestId(/icon-with-text/i);
    const text = getByText(/label/i);

    // Assert
    expect(button).toBeTruthy();
    expect(text).toBeTruthy();
  });
  it('renders successfully with icon with text and icon when button is pressed', async () => {
    // Arrange
    const props: FloatingActionButtonProps = {
      variant: FABVariant.iconWithText,
      text: 'Label',
    };
    const onPress = jest.fn();
    // Act
    const { getByTestId, getByText } = render(
      <FloatingActionButton {...props} onPress={onPress} />
    );
    const button = getByTestId(/icon-with-text/i);
    const text = getByText(/label/i);

    fireEvent.press(button);

    const selected_icon = getByTestId(/selected-icon/i);

    // Assert
    expect(onPress).toBeCalled();
    expect(text).toBeTruthy();

    await waitFor(() => {
      expect(selected_icon).toBeTruthy();
    });
    //test onPress to disable button
  });
  it('renders successfully with icon with text and icon when button is pressed', async () => {
    // Arrange
    const props: FloatingActionButtonProps = {
      variant: FABVariant.iconWithText,
      text: 'Label',
    };
    const onPress = jest.fn();
    // Act
    const { getByTestId, getByText } = render(
      <FloatingActionButton {...props} onPress={onPress} />
    );
    const button = getByTestId(/icon-with-text/i);
    const text = getByText(/label/i);

    fireEvent.press(button);

    const selected_icon = getByTestId(/selected-icon/i);

    // Assert
    expect(onPress).toBeCalled();
    expect(text).toBeTruthy();

    await waitFor(() => {
      expect(selected_icon).toBeTruthy();
    }).then(() => {
      fireEvent.press(button);
    });
  });
});
