import { ThemeDesignTokens } from '../../theme/ThemeProvider';

export enum TypographyVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  p1 = 'p1',
  p2 = 'p2',
  p3 = 'p3',
  p4 = 'p4',
  p1Strong = 'p1Strong',
  p2Strong = 'p2Strong',
  p3Strong = 'p3Strong',
  p4Strong = 'p4Strong',
  p1Action = 'p1Action',
  p2Action = 'p2Action',
  p3Action = 'p3Action',
  p4Action = 'p4Action',
  p1ActionRegular = 'p1ActionRegular',
  p2ActionRegular = 'p2ActionRegular',
  p3ActionRegular = 'p3ActionRegular',
  p4ActionRegular = 'p4ActionRegular',
}

export type TypographyColors =
  | 'defaultDark'
  | 'defaultLight'
  | 'defaultDarkSecondary'
  | 'actionPrimaryDark'
  | 'actionSecondaryLight'
  | 'actionDanger'
  | 'disabled'
  | 'success'
  | 'successStandalone'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dangerError';

export type TypographyAlignment = 'center' | 'left' | 'right' | 'justify';

export type TypographyFontSizes = keyof Pick<
  ThemeDesignTokens,
  | 'BaselineFontFontSize10'
  | 'BaselineFontFontSize12'
  | 'BaselineFontFontSize14'
  | 'BaselineFontFontSize16'
  | 'BaselineFontFontSize18'
  | 'BaselineFontFontSize20'
  | 'BaselineFontFontSize24'
  | 'BaselineFontFontSize28'
  | 'BaselineFontFontSize30'
  | 'BaselineFontFontSize32'
  | 'BaselineFontFontSize36'
  | 'BaselineFontFontSize38'
  | 'BaselineFontFontSize40'
  | 'BaselineFontFontSize42'
  | 'BaselineFontFontSize44'
  | 'BaselineFontFontSize48'
>;

export type TypographyFontWeights = keyof Pick<
  ThemeDesignTokens,
  | 'BaselineFontFontWeightRegular'
  | 'BaselineFontFontWeightMedium'
  | 'BaselineFontFontWeightSemiBold'
  | 'BaselineFontFontWeightBold'
>;

export type TypographyFontFamily = keyof Pick<
  ThemeDesignTokens,
  | 'BaselineFontFontFamilyPoppinsRegular'
  | 'BaselineFontFontFamilyPoppinsSemiBold'
  | 'BaselineFontFontFamilyPoppinsBold'
  | 'BaselineFontFontFamilyPoppinsExtraBold'
>;

export type TypographySettings = {
  fontFamily: TypographyFontFamily;
  fontSize: TypographyFontSizes;
  lineHeight: TypographyFontSizes;
  fontWeight: TypographyFontWeights;
  responsiveFontSize?: TypographyFontSizes;
  capitaliseText?: boolean;
};
