import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FontWeight } from '../../types/FontWeight';
import { ExtendedTheme } from '../../types/Theme';
import { getElipsisStyles } from '../../utils';
import { TypographyProps } from './Typography';
import { TypographyColors, TypographyVariant } from './Typography.types';

export const getTypographyStyles = (
  theme: ThemeDesignTokens
): Record<TypographyVariant, FlattenSimpleInterpolation> => ({
  heading1: css`
    font-family: ${theme.TypographyHeading1FontFamily};
    font-size: ${theme.TypographyWebHeading1FontSize};
    line-height: ${theme.TypographyWebHeading1LineHeight};
    font-weight: ${theme.TypographyHeading1FontWeight as FontWeight};
  `,
  heading2: css`
    font-family: ${theme.TypographyHeading2FontFamily};
    font-size: ${theme.TypographyWebHeading2FontSize};
    line-height: ${theme.TypographyWebHeading2LineHeight};
    font-weight: ${theme.TypographyHeading2FontWeight as FontWeight};
  `,
  heading3: css`
    font-family: ${theme.TypographyHeading3FontFamily};
    font-size: ${theme.TypographyWebHeading3FontSize};
    line-height: ${theme.TypographyWebHeading3LineHeight};
    font-weight: ${theme.TypographyHeading3FontWeight as FontWeight};
  `,
  heading4: css`
    font-family: ${theme.TypographyHeading4FontFamily};
    font-size: ${theme.TypographyWebHeading4FontSize};
    line-height: ${theme.TypographyWebHeading4LineHeight};
    font-weight: ${theme.TypographyHeading4FontWeight as FontWeight};
  `,
  heading5: css`
    font-family: ${theme.TypographyHeading5FontFamily};
    font-size: ${theme.TypographyWebHeading5FontSize};
    line-height: ${theme.TypographyWebHeading5LineHeight};
    font-weight: ${theme.TypographyHeading5FontWeight as FontWeight};
  `,
  heading6: css`
    font-family: ${theme.TypographyWebHeading6FontFamily};
    font-size: ${theme.TypographyWebHeading6FontSize};
    line-height: ${theme.TypographyWebHeading6LineHeight};
    font-weight: ${theme.TypographyWebHeading6FontWeight as FontWeight};
  `,
  subtitle1: css`
    font-family: ${theme.TypographyWebSubtitle1FontFamily};
    font-size: ${theme.TypographyWebSubtitle1FontSize};
    line-height: ${theme.TypographyWebSubtitle1LineHeight};
    font-weight: ${theme.TypographyWebSubtitle1FontWeight as FontWeight};
  `,
  subtitle2: css`
    font-family: ${theme.TypographyWebSubtitle2FontFamily};
    font-size: ${theme.TypographyWebSubtitle2FontSize};
    line-height: ${theme.TypographyWebSubtitle2LineHeight};
    font-weight: ${theme.TypographyWebSubtitle2FontWeight as FontWeight};
  `,
  paragraph1: css`
    font-family: ${theme.TypographyParagraph1FontFamily};
    font-size: ${theme.TypographyParagraph1FontSize};
    line-height: ${theme.TypographyParagraph1LineHeight};
    font-weight: ${theme.TypographyParagraph1FontWeight as FontWeight};
  `,
  paragraph2: css`
    font-family: ${theme.TypographyParagraph2FontFamily};
    font-size: ${theme.TypographyParagraph2FontSize};
    line-height: ${theme.TypographyParagraph2LineHeight};
    font-weight: ${theme.TypographyParagraph2FontWeight as FontWeight};
  `,
  paragraph3: css`
    font-family: ${theme.TypographyParagraph3FontFamily};
    font-size: ${theme.TypographyParagraph3FontSize};
    line-height: ${theme.TypographyParagraph3LineHeight};
    font-weight: ${theme.TypographyParagraph3FontWeight as FontWeight};
  `,
  paragraph4: css`
    font-family: ${theme.TypographyParagraph4FontFamily};
    font-size: ${theme.TypographyParagraph4FontSize};
    line-height: ${theme.TypographyParagraph4LineHeight};
    font-weight: ${theme.TypographyParagraph4FontWeight as FontWeight};
  `,
});

const getColorStyles = (
  theme: ThemeDesignTokens
): Record<string, Record<TypographyColors, FlattenSimpleInterpolation>> => ({
  dark: {
    primary: css`
      color: ${theme.ColorNeutralWhite};
    `,
    secondary: css`
      color: ${theme.ColorNeutralGrey200};
    `,
    white: css`
      color: ${theme.ColorNeutralWhite};
    `,
    black: css`
      color: ${theme.ColorNeutralBlack};
    `,
    success: css`
      color: ${theme.ColorSemanticsSuccess100};
    `,
    error: css`
      color: ${theme.ColorSemanticsError100};
    `,
    warning: css`
      color: ${theme.ColorBaseGrey100};
    `,
    info: css`
      color: ${theme.ColorSemanticsInfo100};
    `,
  },
  light: {
    primary: css`
      color: ${theme.ColorPrimaryGravitas};
    `,
    secondary: css`
      color: ${theme.ColorNeutralGrey100};
    `,
    white: css`
      color: ${theme.ColorNeutralWhite};
    `,
    black: css`
      color: ${theme.ColorNeutralBlack};
    `,
    success: css`
      color: ${theme.ColorSemanticsSuccess100};
    `,
    error: css`
      color: ${theme.ColorSemanticsError100};
    `,
    warning: css`
      color: ${theme.ColorNeutralGrey100};
    `,
    info: css`
      color: ${theme.ColorSemanticsInfo100};
    `,
  },
});

export const getCoreStyles = ({
  theme,
  variant,
  color,
  mode,
  align,
  gutterBottom,
  numberOfLines,
}: ExtendedTheme<TypographyProps>) => css`
  ${variant && getTypographyStyles(theme)[variant]};
  ${numberOfLines && getElipsisStyles(numberOfLines)};
  margin-bottom: ${gutterBottom ? theme.SpacingBase8 : theme.SpacingBase0};
  ${color ? getColorStyles(theme)[mode || 'light'][color] : { color: theme.ColorPrimaryGravitas }};
  ${align ? { textAlign: align } : { textAlign: 'left' }}
`;

export const Typography = styled.div<TypographyProps>`
  ${({ theme, variant, color, mode, align, gutterBottom, numberOfLines }: ExtendedTheme<TypographyProps>) => css`
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
