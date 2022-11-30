import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { faCircleExclamation } from '@fortawesome/pro-regular-svg-icons/faCircleExclamation';
import { faCircleInfo } from '@fortawesome/pro-regular-svg-icons/faCircleInfo';
import { AlertVariant } from '../../types/AlertVariant';

export type IconProps = {
  position: 'left' | 'right';
  variant?: AlertVariant;
};

export const getTitle = () => ({
  [AlertVariant.success]: 'Success',
  [AlertVariant.warning]: 'Warning',
  [AlertVariant.error]: 'Error',
  [AlertVariant.info]: 'Info',
});

export const getAccentColor = (theme: ThemeDesignTokens) => ({
  [AlertVariant.success]: theme.AlertColorSuccessPrimary,
  [AlertVariant.warning]: theme.AlertColorWarningPrimary,
  [AlertVariant.error]: theme.AlertColorErrorPrimary,
  [AlertVariant.info]: theme.AlertColorInfoPrimary,
});

export const getIcon = () => ({
  [AlertVariant.success]: faCheck,
  [AlertVariant.warning]: faCircleExclamation,
  [AlertVariant.error]: faCircleExclamation,
  [AlertVariant.info]: faCircleInfo,
});
