import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';
import Brand from './Brand';
import ThemeProvider, { ThemeDesignTokens } from './ThemeProvider';
import useTheme from '../hooks/useTheme';

const tokens = { foo: 'bar' };

jest.mock('@newcross-tech/ui-design-tokens', () => ({
  native: { homeclinic: tokens, healthforce: tokens },
}));

describe('ThemeProvider', () => {
  let theme: ThemeDesignTokens;
  const Component = () => {
    theme = useTheme();
    return <View></View>;
  };

  it('provides correct set of props to children element for the given brand', () => {
    // Arrange
    const brand = Brand.homeclinic;
    const children = <Component />;

    // Act
    render(<ThemeProvider brand={brand} children={children} />);

    // Assert
    expect(theme).toEqual(tokens);
  });

  it('provides correct set of props to children element for healthforce when branch is not provided', () => {
    // Arrange
    const children = <Component />;

    // Act
    render(<ThemeProvider children={children} />);

    // Assert
    expect(theme).toEqual(tokens);
  });
});
