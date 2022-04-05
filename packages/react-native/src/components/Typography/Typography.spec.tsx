import React from 'react';
import { render } from '@testing-library/react-native';
import Typography, { TypographyProps } from './Typography';
import { Variant } from './Typography.types';

describe('Typography Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: TypographyProps = {
      children: 'My text',
      variant: Variant.heading7,
    };

    // Act
    const { queryByText } = render(<Typography {...props} />);

    // Assert
    expect(queryByText(/my text/i)).toBeTruthy();
  });
});
