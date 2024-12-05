import { render } from '@testing-library/react';
import { byText } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import Typography, { TypographyProps } from './Typography';

describe('Typography', () => {
  it('should not have any a11y errors', async () => {
    // Prepare
    const props: TypographyProps = {
      children: 'My Text',
      variant: 'h4',
      color: 'defaultDark',
      mode: 'light',
      align: 'left',
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
      variant: 'h4',
      color: 'defaultDark',
      mode: 'light',
      align: 'left',
    };

    // Act
    render(<Typography {...props} />);

    // Assert
    expect(byText(/my text/i)).toBeTruthy();
  });
});
