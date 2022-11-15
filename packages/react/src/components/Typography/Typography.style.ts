import styled, { css } from 'styled-components';
import { getElipsisStyles } from '../../../utils/getElipsisStyles';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FontWeight } from '../../types/FontWeight';
import { ExtendedTheme } from '../../types/Theme';
import { TypographyProps } from './Typography';
import { TypographyVariant } from './Typography.types';

export const getTypographyStyles = (theme: ThemeDesignTokens) => ({
  [TypographyVariant.heading1]: css`
    font-family: ${theme.TypographyHeading1FontFamily};
    font-size: ${theme.TypographyHeading1FontSize};
    line-height: ${theme.TypographyHeading1LineHeight};
    font-weight: ${theme.TypographyHeading1FontWeight as FontWeight};
  `,
  [TypographyVariant.heading2]: css`
    font-family: ${theme.TypographyHeading2FontFamily};
    font-size: ${theme.TypographyHeading2FontSize};
    line-height: ${theme.TypographyHeading2LineHeight};
    font-weight: ${theme.TypographyHeading2FontWeight as FontWeight};
  `,
  [TypographyVariant.heading3]: css`
    font-family: ${theme.TypographyHeading3FontFamily};
    font-size: ${theme.TypographyHeading3FontSize};
    line-height: ${theme.TypographyHeading3LineHeight};
    font-weight: ${theme.TypographyHeading3FontWeight as FontWeight};
  `,
  [TypographyVariant.heading4]: css`
    font-family: ${theme.TypographyHeading4FontFamily};
    font-size: ${theme.TypographyHeading4FontSize};
    line-height: ${theme.TypographyHeading4LineHeight};
    font-weight: ${theme.TypographyHeading4FontWeight as FontWeight};
  `,
  [TypographyVariant.heading5]: css`
    font-family: ${theme.TypographyHeading5FontFamily};
    font-size: ${theme.TypographyHeading5FontSize};
    line-height: ${theme.TypographyHeading5LineHeight};
    font-weight: ${theme.TypographyHeading5FontWeight as FontWeight};
  `,
  [TypographyVariant.paragraph1]: css`
    font-family: ${theme.TypographyParagraph1FontFamily};
    font-size: ${theme.TypographyParagraph1FontSize};
    line-height: ${theme.TypographyParagraph1LineHeight};
    font-weight: ${theme.TypographyParagraph1FontWeight as FontWeight};
  `,
  [TypographyVariant.paragraph2]: css`
    font-family: ${theme.TypographyParagraph2FontFamily};
    font-size: ${theme.TypographyParagraph2FontSize};
    line-height: ${theme.TypographyParagraph2LineHeight};
    font-weight: ${theme.TypographyParagraph2FontWeight as FontWeight};
  `,
  [TypographyVariant.paragraph3]: css`
    font-family: ${theme.TypographyParagraph3FontFamily};
    font-size: ${theme.TypographyParagraph3FontSize};
    line-height: ${theme.TypographyParagraph3LineHeight};
    font-weight: ${theme.TypographyParagraph3FontWeight as FontWeight};
  `,
  [TypographyVariant.paragraph4]: css`
    font-family: ${theme.TypographyParagraph4FontFamily};
    font-size: ${theme.TypographyParagraph4FontSize};
    line-height: ${theme.TypographyParagraph4LineHeight};
    font-weight: ${theme.TypographyParagraph4FontWeight as FontWeight};
  `,
});

export const getCoreStyles = ({ theme, variant, gutterBottom, numberOfLines }: ExtendedTheme<TypographyProps>) => css`
  ${variant && getTypographyStyles(theme)[variant]};
  ${numberOfLines && getElipsisStyles(numberOfLines)};
  margin-bottom: ${gutterBottom ? theme.SpacingBase8 : theme.SpacingBase0};
`;

export const Typography = styled.div<TypographyProps>`
  ${({ theme, variant, gutterBottom, numberOfLines }: ExtendedTheme<TypographyProps>) => css`
    ${getCoreStyles({ theme, variant, gutterBottom, numberOfLines } as ExtendedTheme<TypographyProps>)};
  `}
`;
