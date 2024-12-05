import { render } from '@testing-library/react';
import Brand from './Brand';
import ThemeProvider from './ThemeProvider';
import useTheme from '../hooks/useTheme';

jest.mock('@newcross-ui/design-tokens', () => ({
  web: { healthforce: { foo: 'bar' }, homeclinic: { foo: 'bar' } },
}));

describe('ThemeProvider', () => {
  const Component = () => {
    useTheme();
    return <div data-testid="dummy-component" />;
  };

  it('renders children with default brand', () => {
    // Act
    const { getByTestId } = render(
      <ThemeProvider>
        <Component />
      </ThemeProvider>
    );

    // Assert
    expect(getByTestId('dummy-component')).toBeInTheDocument();
  });

  it('renders children with given brand', () => {
    // Arrange
    const brand = Brand.homeclinic;

    // Act
    const { getByTestId } = render(
      <ThemeProvider brand={brand}>
        <Component />
      </ThemeProvider>
    );

    // Assert
    expect(getByTestId('dummy-component')).toBeInTheDocument();
  });
});
