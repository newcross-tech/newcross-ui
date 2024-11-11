import styled, { css, FlattenInterpolation } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme, FontWeight, Mode, Theme } from '../../types';
import { getElipsisStyles, getSortedBreakpoints } from '../../utils';
import { TypographyProps } from './Typography';
import { TypographyColors, TypographyVariant } from './Typography.types';
import { breakpoint } from '../../utils/css';
import { typographyMap } from './Typography.constants';

const getTypographyStyles = (theme: ThemeDesignTokens, variant: TypographyVariant): FlattenInterpolation<Theme> => {
  const { fontFamily, fontSize, lineHeight, fontWeight, responsiveness, capitaliseText } = typographyMap[variant];

  const hasResponsiveValues = responsiveness && Object.keys(responsiveness).length > 0;

  return css`
    font-family: ${theme[fontFamily]};
    font-size: ${theme[fontSize]};
    line-height: ${theme[lineHeight]};
    font-weight: ${theme[fontWeight] as FontWeight};
    ${hasResponsiveValues &&
    getSortedBreakpoints(responsiveness).map(
      ([breakpointKey, responsiveStyles]) =>
        breakpoint[breakpointKey]`{
          font-size: ${theme[responsiveStyles.fontSize]};
          line-height: ${theme[responsiveStyles.lineHeight]};
        }
      `
    )}
    ${capitaliseText && 'text-transform: capitalize;'};
  `;
};

export const getColorStyles = (theme: ThemeDesignTokens): Record<Mode, Record<TypographyColors, string>> => ({
  dark: {
    primary: theme.ThemesNeutral0,
    secondary: theme.ThemesNeutral100,
    white: theme.ThemesNeutral0,
    black: theme.ThemesPrimary800,
    error: theme.ThemesDanger500,
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
  },
  light: {
    primary: theme.ThemesPrimary500,
    secondary: theme.ThemesNeutral700,
    white: theme.ThemesNeutral0,
    black: theme.ThemesSecondary950,
    error: theme.ThemesDanger500,
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
  ${color ? { color: getColorStyles(theme)[mode]?.[color] } : { color: 'inherit' }};
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
