import { faCircleCheck } from '@fortawesome/pro-light-svg-icons/faCircleCheck';
import { faCircleExclamation } from '@fortawesome/pro-light-svg-icons/faCircleExclamation';
import { faCircleInfo } from '@fortawesome/pro-light-svg-icons/faCircleInfo';
import { faEnvelope } from '@fortawesome/pro-duotone-svg-icons/faEnvelope';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import { AlertVariant } from '../../types';
import { TypographyColors } from '../Typography';

export const ALERT_TEXT_COLOR: Record<AlertVariant, TypographyColors> = {
  success: 'success',
  warning: 'warning',
  error: 'danger',
  info: 'info',
  notification: 'info',
};

export const ALERT_ICON: Record<AlertVariant, IconDefinition> = {
  success: faCircleCheck,
  warning: faCircleExclamation,
  error: faCircleExclamation,
  info: faCircleInfo,
  notification: faEnvelope as IconDefinition,
};

export const ALERT_TITLES: Record<AlertVariant, string> = {
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
  info: 'Info',
  notification: 'Notification',
};
