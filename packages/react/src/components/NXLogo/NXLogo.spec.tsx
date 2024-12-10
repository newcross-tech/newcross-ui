import { render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import NXLogo, { NXLogoProps } from './NXLogo';

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

  const testCases: Array<NXLogoProps> = [
    { type: 'logo', scheme: 'dark' },
    { type: 'logo', scheme: 'light' },
    { type: 'logomark', scheme: 'dark' },
    {
      type: 'logomark',
      scheme: 'light',
    },
    { type: 'logo' },
  ];

  it.each(testCases)(
    'renders successfully with type: $type and scheme: $scheme',
    ({ type, scheme }) => {
      // Arrange
      renderComponent({ type, scheme });

      // Act
      const logo = ui.logo(type, scheme ?? 'light').get();

      // Assert
      expect(logo).toBeInTheDocument();
    }
  );
});
