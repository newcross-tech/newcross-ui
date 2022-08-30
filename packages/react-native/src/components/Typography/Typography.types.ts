import { TextStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FontWeight } from '../../types';

export enum TypographyVariant {
  heading1 = 'heading1',
  heading2 = 'heading2',
  heading3 = 'heading3',
  heading4 = 'heading4',
  heading5 = 'heading5',
  paragraph1 = 'paragraph1',
  paragraph2 = 'paragraph2',
  paragraph3 = 'paragraph3',
  paragraph4 = 'paragraph4',
}

export const getTypographyValues = (
  theme: ThemeDesignTokens
): Record<TypographyVariant, TextStyle> => ({
  [TypographyVariant.heading1]: {
    fontFamily: theme.TypographyHeading1FontFamily,
    fontSize: theme.TypographyHeading1FontSize,
    lineHeight: theme.TypographyHeading1LineHeight,
    fontWeight: theme.TypographyHeading1FontWeight as FontWeight,
  },
  [TypographyVariant.heading2]: {
    fontFamily: theme.TypographyHeading2FontFamily,
    fontSize: theme.TypographyHeading2FontSize,
    lineHeight: theme.TypographyHeading2LineHeight,
    fontWeight: theme.TypographyHeading2FontWeight as FontWeight,
  },
  [TypographyVariant.heading3]: {
    fontFamily: theme.TypographyHeading3FontFamily,
    fontSize: theme.TypographyHeading3FontSize,
    lineHeight: theme.TypographyHeading3LineHeight,
    fontWeight: theme.TypographyHeading3FontWeight as FontWeight,
  },
  [TypographyVariant.heading4]: {
    fontFamily: theme.TypographyHeading4FontFamily,
    fontSize: theme.TypographyHeading4FontSize,
    lineHeight: theme.TypographyHeading4LineHeight,
    fontWeight: theme.TypographyHeading4FontWeight as FontWeight,
  },
  [TypographyVariant.heading5]: {
    fontFamily: theme.TypographyHeading5FontFamily,
    fontSize: theme.TypographyHeading5FontSize,
    lineHeight: theme.TypographyHeading5LineHeight,
    fontWeight: theme.TypographyHeading5FontWeight as FontWeight,
  },
  [TypographyVariant.paragraph1]: {
    fontFamily: theme.TypographyParagraph1FontFamily,
    fontSize: theme.TypographyParagraph1FontSize,
    lineHeight: theme.TypographyParagraph1LineHeight,
    fontWeight: theme.TypographyParagraph1FontWeight as FontWeight,
  },
  [TypographyVariant.paragraph2]: {
    fontFamily: theme.TypographyParagraph2FontFamily,
    fontSize: theme.TypographyParagraph2FontSize,
    lineHeight: theme.TypographyParagraph2LineHeight,
    fontWeight: theme.TypographyParagraph2FontWeight as FontWeight,
  },
  [TypographyVariant.paragraph3]: {
    fontFamily: theme.TypographyParagraph3FontFamily,
    fontSize: theme.TypographyParagraph3FontSize,
    lineHeight: theme.TypographyParagraph3LineHeight,
    fontWeight: theme.TypographyParagraph3FontWeight as FontWeight,
  },
  [TypographyVariant.paragraph4]: {
    fontFamily: theme.TypographyParagraph4FontFamily,
    fontSize: theme.TypographyParagraph4FontSize,
    lineHeight: theme.TypographyParagraph4LineHeight,
    fontWeight: theme.TypographyParagraph4FontWeight as FontWeight,
  },
});
