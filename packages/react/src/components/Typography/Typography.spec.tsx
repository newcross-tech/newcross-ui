import Typography, { TypographyProps } from './Typography';
import { TypographyVariant } from './Typography.types';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Typography', () => {
  it('renders successfully', () => {
    // Prepare
    const props: TypographyProps = {
      children: 'My Text',
      variant: TypographyVariant.heading4,
    };

    // Act
    render(<Typography {...props} />);

    // Assert
    expect(screen.queryByText(/my text/i)).toBeTruthy();
  });
});
