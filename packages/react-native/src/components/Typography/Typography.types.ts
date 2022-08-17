import { TextStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FontWeight } from '../../types';

export enum TypographyVariant {
  heading3 = 'heading3',
  heading5 = 'heading5',
  heading6 = 'heading6',
  heading7 = 'heading7',
  paragraph1 = 'paragraph1',
  paragraph2 = 'paragraph2',
}

export const getTypographyValues = (
  theme: ThemeDesignTokens
): Record<TypographyVariant, TextStyle> => ({
  [TypographyVariant.heading3]: {
    fontFamily: theme.TypographyHeading3FontFamily,
    fontSize: theme.TypographyHeading3FontSize,
    lineHeight: theme.TypographyHeading3LineHeight,
    fontWeight: theme.TypographyHeading3FontWeight as FontWeight,
  },
  [TypographyVariant.heading5]: {
    fontFamily: theme.TypographyHeading5FontFamily,
    fontSize: theme.TypographyHeading5FontSize,
    lineHeight: theme.TypographyHeading5LineHeight,
    fontWeight: theme.TypographyHeading5FontWeight as FontWeight,
  },
  [TypographyVariant.heading6]: {
    fontFamily: theme.TypographyHeading6FontFamily,
    fontSize: theme.TypographyHeading6FontSize,
    lineHeight: theme.TypographyHeading6LineHeight,
    fontWeight: theme.TypographyHeading6FontWeight as FontWeight,
  },
  [TypographyVariant.heading7]: {
    fontFamily: theme.TypographyHeading7FontFamily,
    fontSize: theme.TypographyHeading7FontSize,
    lineHeight: theme.TypographyHeading7LineHeight,
    fontWeight: theme.TypographyHeading7FontWeight as FontWeight,
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
});
