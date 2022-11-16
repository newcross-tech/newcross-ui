import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { NewcrossBrandIcon } from './NewcrossBrandIcon';

describe('Newcross Logo', () => {
  it('renders successfully', () => {
    // Arrange
    // Act
    render(<NewcrossBrandIcon testID="newcross-brand-icon" />);

    // Assert
    expect(screen.getByTestId('newcross-brand-icon')).toBeTruthy();
  });
});
