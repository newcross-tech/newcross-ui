import { render, screen } from '@testing-library/react';
import { axe } from '../../utils/test/axeConfig';
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
