import { render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import NXLogo, { NXLogoProps } from './NXLogo';
import { LOGO_SIZE } from './NXLogo.constants';

const renderComponent = (customProps: Partial<NXLogoProps>) => {
  const props: NXLogoProps = {
    type: 'logo',
    scheme: 'dark',
    ...customProps,
  };

  render(<NXLogo {...props} />);
};

const typeAndSchemeTestCases: Array<NXLogoProps> = [
  { type: 'logo', scheme: 'dark' },
  { type: 'logo', scheme: 'light' },
  { type: 'logomark', scheme: 'dark' },
  {
    type: 'logomark',
    scheme: 'light',
  },
  { type: 'logo' },
];

const sizeTestCases: Array<Required<Pick<NXLogoProps, 'type' | 'size'>>> = [
  { type: 'logo', size: 'lg' },
  { type: 'logo', size: 'md' },
  { type: 'logo', size: 'sm' },
  { type: 'logomark', size: 'lg' },
  { type: 'logomark', size: 'md' },
  { type: 'logomark', size: 'sm' },
];

describe('NXLogo Component', () => {
  const ui = {
    logo: (type: 'logo' | 'logomark', scheme: 'dark' | 'light') =>
      byTestId(`NX-${type}-${scheme}`),
  };

  it.each(typeAndSchemeTestCases)(
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

  it.each(sizeTestCases)(
    'renders $type with size $size having the correct dimensions',
    ({ type, size }) => {
      // Arrange
      renderComponent({ type, size, scheme: 'dark' });

      // Act
      const container = ui.logo(type, 'dark').get();
      const svg = container.querySelector('svg');
      const expected = LOGO_SIZE[type][size];

      // Assert
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('width', expected.width.toString());
      expect(svg).toHaveAttribute('height', expected.height.toString());
    }
  );
});
