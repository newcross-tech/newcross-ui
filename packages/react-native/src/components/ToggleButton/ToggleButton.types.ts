import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { TextStyle } from 'react-native';

export enum ToggleButtonColors {
  primary = 'primary',
  secondary = 'secondary',
}

export const getColorValues = (
  theme: ThemeDesignTokens,
  selected: boolean | undefined
): Record<ToggleButtonColors, TextStyle> => ({
  [ToggleButtonColors.primary]: {
    borderColor: selected
      ? theme.ToggleButtonSelectedPrimaryBorderColor
      : theme.ToggleButtonBorderColor,
    backgroundColor: selected
      ? theme.ToggleButtonSelectedPrimaryBackgroundColor
      : theme.ToggleButtonBackgroundColor,
  },
  [ToggleButtonColors.secondary]: {
    borderColor: selected
      ? theme.ToggleButtonSelectedSecondaryBorderColor
      : theme.ToggleButtonBorderColor,
    backgroundColor: selected
      ? theme.ToggleButtonSelectedSecondaryBackgroundColor
      : theme.ToggleButtonBackgroundColor,
  },
});

export const getTextColorValues = (
  theme: ThemeDesignTokens,
  selected: boolean | undefined
): Record<ToggleButtonColors, TextStyle> => ({
  [ToggleButtonColors.primary]: {
    color: selected
      ? theme.ToggleButtonSelectedPrimaryColor
      : theme.ToggleButtonColor,
  },
  [ToggleButtonColors.secondary]: {
    color: theme.ToggleButtonColor,
  },
});

export const getShadowValues = (
  theme: ThemeDesignTokens,
  selected: boolean | undefined
) =>
  !selected && {
    shadowColor: theme.ToggleButtonShadowColor,
    shadowOpacity: theme.ToggleButtonShadowOpacity,
    shadowRadius: theme.ToggleButtonShadowRadius,
    shadowOffset: {
      height: theme.ToggleButtonShadowOffsetHeight,
      width: theme.ToggleButtonShadowOffsetWidth,
    },
    elevation: theme.ToggleButtonShadowElevation,
  };

export const getInsetShadowValues = (theme: ThemeDesignTokens) => ({
  [ToggleButtonColors.primary]: {
    shadowRadius: theme.ToggleButtonSelectedPrimaryInsetShadowRadius,
  },
  [ToggleButtonColors.secondary]: {
    shadowRadius: theme.ToggleButtonSelectedSecondaryInsetShadowRadius,
  },
});
