import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ViewStyle } from 'react-native';

export enum FABVariant {
  icon = 'icon',
  iconWithText = 'iconWithText',
}

export const getContainerStyle = (
  theme: ThemeDesignTokens
): Record<FABVariant, ViewStyle> => ({
  [FABVariant.icon]: {
    width: theme.FabContainerIconOnlySize,
    height: theme.FabContainerIconOnlySize,
  },
  [FABVariant.iconWithText]: {
    height: theme.FabContainerWithTextSize,
  },
});
