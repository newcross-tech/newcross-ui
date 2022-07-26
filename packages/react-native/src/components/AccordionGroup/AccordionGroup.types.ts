import { ViewStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

export enum AccordionGroupSpacing {
  default = 'default',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export const getSpacingValues = (
  theme: ThemeDesignTokens
): Record<AccordionGroupSpacing, ViewStyle> => ({
  [AccordionGroupSpacing.default]: {
    marginBottom: theme.AccordionGroupMarginBottomDefault,
  },
  [AccordionGroupSpacing.small]: {
    marginBottom: theme.AccordionGroupMarginBottomSmall,
  },
  [AccordionGroupSpacing.medium]: {
    marginBottom: theme.AccordionGroupMarginBottomMedium,
  },
  [AccordionGroupSpacing.large]: {
    marginBottom: theme.AccordionGroupMarginBottomLarge,
  },
});
