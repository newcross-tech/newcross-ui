import { createContext, ReactNode } from 'react';
import * as theme from '@newcross-tech/ui-design-tokens';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import Brand from './Brand';

const defaultTheme = theme.web[Brand.healthforce];

export const ThemeContext = createContext(defaultTheme);
export type ThemeDesignTokens = typeof defaultTheme;
// helper to get the name of a design token
export const themeDesignTokenName = <TName extends keyof ThemeDesignTokens>(
  name: TName
) => name;

export type ThemeProviderProps = {
  children: ReactNode;
  brand?: Brand;
};

const ThemeProvider = ({
  brand = Brand.healthforce,
  children,
}: ThemeProviderProps) => (
  <SCThemeProvider theme={theme.web[brand]}>{children}</SCThemeProvider>
);

export default ThemeProvider;
