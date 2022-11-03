import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ViewStyle, TextStyle, ColorValue } from 'react-native';
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';

import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { faCircleExclamation } from '@fortawesome/pro-regular-svg-icons/faCircleExclamation';
import { faCircleInfo } from '@fortawesome/pro-regular-svg-icons/faCircleInfo';
import { SemanticVariant } from '../../types';

export type AlertStyle = {
  cardContainer: ViewStyle;
  alertContainer: ViewStyle;
  textContainer: ViewStyle;
  text: TextStyle;
  iconStyle: FontAwesomeIconStyle;
  closeIconStyle: FontAwesomeIconStyle;
};

export const getTitle = (): Record<SemanticVariant, string> => ({
  [SemanticVariant.success]: 'Success',
  [SemanticVariant.warning]: 'Warning',
  [SemanticVariant.error]: 'Error',
  [SemanticVariant.info]: 'Info',
});

export const getAccentColor = (
  theme: ThemeDesignTokens
): Record<SemanticVariant, string> => ({
  [SemanticVariant.success]: theme.AlertColorSuccessPrimary,
  [SemanticVariant.warning]: theme.AlertColorWarningPrimary,
  [SemanticVariant.error]: theme.AlertColorErrorPrimary,
  [SemanticVariant.info]: theme.AlertColorInfoPrimary,
});

export const getBackgroundColor = (
  theme: ThemeDesignTokens
): Record<SemanticVariant, ColorValue> => ({
  [SemanticVariant.success]: theme.AlertColorSuccessSecondary,
  [SemanticVariant.warning]: theme.AlertColorWarningSecondary,
  [SemanticVariant.error]: theme.AlertColorErrorSecondary,
  [SemanticVariant.info]: theme.AlertColorInfoSecondary,
});

export const getIcon = (): Record<SemanticVariant, IconDefinition> => ({
  [SemanticVariant.success]: faCheck,
  [SemanticVariant.warning]: faCircleExclamation,
  [SemanticVariant.error]: faCircleExclamation,
  [SemanticVariant.info]: faCircleInfo,
});
