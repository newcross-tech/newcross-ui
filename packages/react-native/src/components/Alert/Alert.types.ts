import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ViewStyle, TextStyle, ColorValue } from 'react-native';
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { faCircleExclamation } from '@fortawesome/pro-regular-svg-icons/faCircleExclamation';
import { faCircleInfo } from '@fortawesome/pro-regular-svg-icons/faCircleInfo';
import { Variant } from '../../types';

export enum AlertVariant {
  success = 'success',
  warning = 'warning',
  error = 'error',
  info = 'info',
}

export type AlertStyle = {
  cardContainer: ViewStyle;
  alertContainer: ViewStyle;
  textContainer: ViewStyle;
  text: TextStyle;
  iconStyle: FontAwesomeIconStyle;
  closeIconStyle: FontAwesomeIconStyle;
};

export const getTitle = (): Record<Variant, string> => ({
  [AlertVariant.success]: 'Success',
  [AlertVariant.warning]: 'Warning',
  [AlertVariant.error]: 'Error',
  [AlertVariant.info]: 'Info',
});

export const getAccentColor = (
  theme: ThemeDesignTokens
): Record<Variant, string> => ({
  [AlertVariant.success]: theme.AlertColorSuccessPrimary,
  [AlertVariant.warning]: theme.AlertColorWarningPrimary,
  [AlertVariant.error]: theme.AlertColorErrorPrimary,
  [AlertVariant.info]: theme.AlertColorInfoPrimary,
});

export const getBackgroundColor = (
  theme: ThemeDesignTokens
): Record<Variant, ColorValue> => ({
  [AlertVariant.success]: theme.AlertColorSuccessSecondary,
  [AlertVariant.warning]: theme.AlertColorWarningSecondary,
  [AlertVariant.error]: theme.AlertColorErrorSecondary,
  [AlertVariant.info]: theme.AlertColorInfoSecondary,
});

export const getIcon = (): Record<Variant, IconDefinition> => ({
  [AlertVariant.success]: faCheck,
  [AlertVariant.warning]: faCircleExclamation,
  [AlertVariant.error]: faCircleExclamation,
  [AlertVariant.info]: faCircleInfo,
});
