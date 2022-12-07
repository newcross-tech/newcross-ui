import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ViewStyle } from 'react-native';

export enum FABVariant {
  big = 'big',
  small = 'small',
}

export const getContainerStyle = (
  theme: ThemeDesignTokens
): Record<FABVariant, ViewStyle> => ({
  [FABVariant.small]: {
    minWidth: theme.FabSizeSmall,
    minHeight: theme.FabSizeSmall,
  },
  [FABVariant.big]: {
    minWidth: theme.FabSizeBig,
    minHeight: theme.FabSizeBig,
  },
});
