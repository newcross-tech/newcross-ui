import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { HealthforceIcon } from './HealthforceIcon';

describe('Healthforce Icon', () => {
  it('renders successfully', () => {
    // Arrange
    // Act
    render(<HealthforceIcon testID="healthforce-icon" />);

    // Assert
    expect(screen.getByTestId('healthforce-icon')).toBeTruthy();
  });
});
