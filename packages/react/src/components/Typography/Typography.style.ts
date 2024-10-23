import styled, { css, FlattenInterpolation, FlattenSimpleInterpolation } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme, FontWeight, Theme } from '../../types';
import { getElipsisStyles } from '../../utils';
import { TypographyProps } from './Typography';
import { TypographyVariant } from './Typography.types';
import { breakpoint } from '../../utils/css';
import { typographyConfig } from './Typography.config';

const getTypographyStyles = (theme: ThemeDesignTokens, variant: TypographyVariant): FlattenInterpolation<Theme> => {
  const { fontFamily, fontSize, lineHeight, fontWeight, responsiveFontSize, capitaliseText } =
    typographyConfig[variant];

  return css`
    font-family: ${theme[fontFamily]};
    font-size: ${theme[fontSize]};
    line-height: ${theme[lineHeight]};
    font-weight: ${theme[fontWeight] as FontWeight};
    ${responsiveFontSize &&
    breakpoint.md`
      font-size: ${theme[responsiveFontSize]};
    `}
    ${capitaliseText && 'text-transform: capitalize;'};
  `;
};

export const getColorStyles = (theme: ThemeDesignTokens): Record<string, Record<string, string>> => ({
  dark: {
    primary: theme.TypographyDarkColorPrimary,
    secondary: theme.TypographyDarkColorSecondary,
    white: theme.TypographyColorWhite,
    black: theme.TypographyColorBlack,
    success: theme.TypographyColorSuccess,
    error: theme.TypographyColorError,
    warning: theme.TypographyColorWarning,
    info: theme.TypographyColorInfo,
  },
  light: {
    primary: theme.TypographyColorPrimary,
    secondary: theme.TypographyColorSecondary,
    white: theme.TypographyColorWhite,
    black: theme.TypographyColorBlack,
    success: theme.TypographyColorSuccess,
    error: theme.TypographyColorError,
    warning: theme.TypographyColorWarning,
    info: theme.TypographyColorInfo,
  },
});

export const getCoreStyles = ({
  theme,
  variant,
  color,
  mode = 'light',
  align,
  gutterBottom,
  numberOfLines,
}: ExtendedTheme<TypographyProps>) => css`
  ${getTypographyStyles(theme, variant)};
  ${numberOfLines && getElipsisStyles(numberOfLines)};
  margin-bottom: ${gutterBottom ? theme.SpacingBase8 : theme.SpacingBase0};
  ${color ? { color: getColorStyles(theme)?.[mode]?.[color] } : { color: 'inherit' }};
  ${align ? { textAlign: align } : { textAlign: 'inherit' }};

  b,
  strong,
  em {
    font-family: ${theme.TypographyFontFamilyPoppinsSemiBold};
  }
`;

export const Typography = styled.div<TypographyProps>`
  ${({
    theme,
    variant,
    color,
    mode,
    align,
    gutterBottom,
    numberOfLines,
    display,
  }: ExtendedTheme<TypographyProps>) => css`
    display: ${display};
    ${getCoreStyles({
      theme,
      variant,
      color,
      mode,
      align,
      gutterBottom,
      numberOfLines,
    } as ExtendedTheme<TypographyProps>)};
  `}
`;
