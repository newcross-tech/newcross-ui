import { createContext, ReactNode } from 'react';
import * as theme from '@newcross-ui/design-tokens';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import Brand from './Brand';

const defaultTheme = theme.web['healthforce'];

export const ThemeContext = createContext(defaultTheme);
export type ThemeDesignTokens = typeof defaultTheme;

export type ThemeProviderProps = {
  children: ReactNode;
  brand?: Brand;
};

const ThemeProvider = ({
  brand = 'healthforce',
  children,
}: ThemeProviderProps) => (
  <SCThemeProvider theme={theme.web[brand]}>{children}</SCThemeProvider>
);

export default ThemeProvider;
