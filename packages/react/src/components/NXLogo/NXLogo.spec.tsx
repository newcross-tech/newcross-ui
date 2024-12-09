import { render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import NXLogo, { NXLogoProps } from './NXLogo';

type NXLogoTestCase = NXLogoProps & { expectedAriaLabel: string };

const renderComponent = (customProps: Partial<NXLogoProps>) => {
  const props: NXLogoProps = {
    type: 'logo',
    scheme: 'dark',
    ...customProps,
  };

  render(<NXLogo {...props} />);
};

describe('NXLogo Component', () => {
  const ui = {
    logo: (type: 'logo' | 'logomark', scheme: 'dark' | 'light') =>
      byTestId(`NX-${type}-${scheme}`),
  };

  const testCases: Array<NXLogoTestCase> = [
    { type: 'logo', scheme: 'dark', expectedAriaLabel: 'NX logo dark' },
    { type: 'logo', scheme: 'light', expectedAriaLabel: 'NX logo light' },
    { type: 'logomark', scheme: 'dark', expectedAriaLabel: 'NX logomark dark' },
    {
      type: 'logomark',
      scheme: 'light',
      expectedAriaLabel: 'NX logomark light',
    },
  ];

  it.each(testCases)(
    'renders successfully with type: $type and scheme: $scheme',
    ({ type, scheme, expectedAriaLabel }) => {
      // Arrange
      renderComponent({ type, scheme });

      // Act
      const logo = ui.logo(type, scheme ?? 'light').get();

      // Assert
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('aria-label', expectedAriaLabel);
    }
  );
});
