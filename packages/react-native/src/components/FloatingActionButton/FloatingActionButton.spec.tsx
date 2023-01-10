import { faCalendarDays } from '@fortawesome/pro-light-svg-icons/faCalendarDays';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import FloatingActionButton, {
  FloatingActionButtonProps,
} from './FloatingActionButton';
import { FABVariant } from './FloatingActionButton.types';

describe('FloatingActionButton Component', () => {
  it('renders successfully with all elements', async () => {
    // Arrange
    const props: FloatingActionButtonProps = {
      text: 'text',
      isSelected: true,
      icon: faCalendarDays,
    };
    // Act
    const { getByTestId, getByText } = render(
      <FloatingActionButton {...props} />
    );

    const button = getByTestId('floating-action-button');
    const icon = getByTestId('icon');
    const selected_icon = getByTestId('selected-icon');
    const text = getByText('text');

    // Assert
    expect(text).toBeDefined();
    expect(button).toBeDefined();
    expect(icon).toBeDefined();
    expect(selected_icon).toBeDefined();
  });
  it('check onPress', async () => {
    // Arrange
    const props: FloatingActionButtonProps = {
      variant: FABVariant.small,
    };
    const onPress = jest.fn();
    // Act
    const { getByTestId } = render(
      <FloatingActionButton {...props} onPress={onPress} />
    );
    const button = getByTestId('floating-action-button');

    fireEvent.press(button);

    // Assert
    expect(onPress).toHaveBeenCalled();
  });
});
