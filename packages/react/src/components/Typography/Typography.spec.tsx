import { render, screen } from '@testing-library/react';
import React from 'react';
import axe from '../../../testutils';
import Typography, { TypographyProps } from './Typography';
import { TypographyVariant } from './Typography.types';

describe('Typography', () => {
  it('should not have any a11y errors', async () => {
    // Prepare
    const props: TypographyProps = {
      children: 'My Text',
      variant: TypographyVariant.heading4,
    };

    // Act
    render(<Typography {...props} />);

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

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
