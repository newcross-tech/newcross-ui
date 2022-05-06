import React from 'react';
import { render } from '@testing-library/react-native';
import ToggleSwitch from './ToggleSwitch';

describe('ToggleSwitch Component', () => {
  it('renders successfully', () => {
    // Act
    const { queryByTestId } = render(<ToggleSwitch />);
    // Assert
    expect(queryByTestId('toggle-switch')).toBeTruthy();
  });
});
