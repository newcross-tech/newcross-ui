import React from 'react';
import { render } from '@testing-library/react-native';
import FloatingActionButton, {
  FloatingActionButtonProps,
} from './FloatingActionButton';
import { FABVariant } from './FloatingActionButton.types';

describe('FloatingActionButton Component', () => {
  it('renders successfully with icon only', () => {
    // Act
    const { getByTestId } = render(<FloatingActionButton />);
    const checkbox = getByTestId(/floating-action-button/i);

    // Assert
    expect(checkbox).toBeTruthy();
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
    const checkbox = getByTestId(/icon-with-text/i);
    const text = getByText(/label/i);

    // Assert
    expect(checkbox).toBeTruthy();
    expect(text).toBeTruthy();
  });
  it('renders successfully with icon with text and is selected', () => {
    // Arrange
    const props: FloatingActionButtonProps = {
      variant: FABVariant.iconWithText,
      text: 'Label',
      selected: true,
    };

    // Act
    const { getByTestId, getByText } = render(
      <FloatingActionButton {...props} />
    );
    const checkbox = getByTestId(/icon-with-text/i);
    const text = getByText(/label/i);
    const selected = getByTestId(/selected/i);

    // Assert
    expect(checkbox).toBeTruthy();
    expect(text).toBeTruthy();
    expect(selected).toBeTruthy();
  });
});
