import React, { createContext, ReactNode } from 'react';
import * as theme from '@newcross-tech/ui-design-tokens';
import Brand from './Brand';

const defaultTheme = theme.native[Brand.healthforce];

export type ThemeDesignTokens = typeof defaultTheme;

export const ThemeContext = createContext(defaultTheme);

export type ThemeProviderProps = {
  children: ReactNode;
  brand?: Brand;
};

const ThemeProvider = ({
  brand = Brand.healthforce,
  children,
}: ThemeProviderProps) => (
  <ThemeContext.Provider value={theme.native[brand] as ThemeDesignTokens}>
    {children}
  </ThemeContext.Provider>
);

export default ThemeProvider;
