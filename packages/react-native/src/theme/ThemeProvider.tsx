import React from 'react';
import { createContext, ReactNode } from 'react';
import * as theme from '@newcross-ui/design-tokens';
import Brand from './Brand';

const defaultTheme = theme[Brand.healthforce];

export type ThemeDesignTokens = typeof defaultTheme;

export const ThemeContext = createContext(defaultTheme);

export type ThemeProviderProps = {
  children: ReactNode;
  brand: Brand;
};

const ThemeProvider = ({ brand, children }: ThemeProviderProps) => (
  <ThemeContext.Provider value={theme[brand] as ThemeDesignTokens}>
    {children}
  </ThemeContext.Provider>
);

export default ThemeProvider;
