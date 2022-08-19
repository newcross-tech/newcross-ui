import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ViewStyle, TextStyle, ColorValue } from 'react-native';
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';

import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/pro-regular-svg-icons/faCircleCheck';
import { faCircleExclamation } from '@fortawesome/pro-regular-svg-icons/faCircleExclamation';
import { faTriangleExclamation } from '@fortawesome/pro-regular-svg-icons/faTriangleExclamation';
import { faCircleInfo } from '@fortawesome/pro-regular-svg-icons/faCircleInfo';

export type AlertStyle = {
  alertContainer: ViewStyle;
  textContainer: ViewStyle;
  text: TextStyle;
  iconStyle: FontAwesomeIconStyle;
};

export enum AlertVariant {
  success = 'success',
  warning = 'warning',
  error = 'error',
  info = 'info',
}

export const getTitle = (): Record<AlertVariant, string> => ({
  [AlertVariant.success]: 'Success',
  [AlertVariant.warning]: 'Warning',
  [AlertVariant.error]: 'Error',
  [AlertVariant.info]: 'Info',
});

export const getAccentColor = (
  theme: ThemeDesignTokens
): Record<AlertVariant, string> => ({
  [AlertVariant.success]: theme.AlertColorSuccessPrimary,
  [AlertVariant.warning]: theme.AlertColorWarningPrimary,
  [AlertVariant.error]: theme.AlertColorErrorPrimary,
  [AlertVariant.info]: theme.AlertColorInfoPrimary,
});

export const getBackgroundColor = (
  theme: ThemeDesignTokens
): Record<AlertVariant, ColorValue> => ({
  [AlertVariant.success]: theme.AlertColorSuccessSecondary,
  [AlertVariant.warning]: theme.AlertColorWarningSecondary,
  [AlertVariant.error]: theme.AlertColorErrorSecondary,
  [AlertVariant.info]: theme.AlertColorInfoSecondary,
});

export const getIcon = (): Record<AlertVariant, IconDefinition> => ({
  [AlertVariant.success]: faCircleCheck,
  [AlertVariant.warning]: faTriangleExclamation,
  [AlertVariant.error]: faCircleExclamation,
  [AlertVariant.info]: faCircleInfo,
});
