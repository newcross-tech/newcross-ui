import styled, { css, FlattenInterpolation } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme, FontWeight, Theme } from '../../types';
import { getElipsisStyles } from '../../utils';
import { TypographyProps } from './Typography';
import { TypographyColors, TypographyVariant } from './Typography.types';
import { breakpoint } from '../../utils/css';
import { typographyConfig } from './Typography.config';

const getTypographyStyles = (theme: ThemeDesignTokens, variant: TypographyVariant): FlattenInterpolation<Theme> => {
  const { fontFamily, fontSize, lineHeight, fontWeight, responsiveFontSize, responsiveLineHeight, capitaliseText } =
    typographyConfig[variant];

  return css`
    font-family: ${theme[fontFamily]};
    font-size: ${theme[fontSize]};
    line-height: ${theme[lineHeight]};
    font-weight: ${theme[fontWeight] as FontWeight};
    ${responsiveFontSize &&
    breakpoint.md`
      font-size: ${theme[responsiveFontSize]};
      line-height: ${theme[responsiveLineHeight]};
    `}
    ${capitaliseText && 'text-transform: capitalize;'};
  `;
};

export const getColorStyles = (theme: ThemeDesignTokens): Record<TypographyColors, string> => ({
  defaultDark: theme.ElementsTextDefaultDark,
  defaultLight: theme.ElementsTextDefaultLight,
  defaultDarkSecondary: theme.ElementsTextDefaultDarkSecondary,
  actionPrimaryDark: theme.ElementsTextActionPrimaryDark,
  actionSecondaryLight: theme.ElementsTextActionSecondaryLight,
  actionDanger: theme.ElementsTextActionDanger,
  disabled: theme.ElementsTextDisabled,
  success: theme.ElementsTextSuccess,
  successStandalone: theme.ElementsTextSuccessStandalone,
  info: theme.ElementsTextInfo,
  warning: theme.ElementsTextWarning,
  danger: theme.ElementsTextDanger,
  dangerError: theme.ElementsTextDangerError,
});

export const getCoreStyles = ({
  theme,
  variant,
  color,
  align,
  gutterBottom,
  numberOfLines,
}: ExtendedTheme<TypographyProps>) => css`
  ${getTypographyStyles(theme, variant)};
  ${numberOfLines && getElipsisStyles(numberOfLines)};
  margin-bottom: ${gutterBottom ? theme.SpacingBase8 : theme.SpacingBase0};
  ${color ? { color: getColorStyles(theme)[color] } : { color: 'inherit' }};
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
    margin: 0;
    padding: 0;
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
