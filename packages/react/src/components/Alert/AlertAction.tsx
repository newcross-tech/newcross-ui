import { cloneElement, isValidElement } from 'react';
import Link, { LinkProps } from '../Link';
import { ALERT_TEXT_COLOR } from './constants';
import { AlertActionProps } from './Alert.types';

export const AlertAction = ({ action, variant }: AlertActionProps) => {
  if (isValidElement<LinkProps>(action)) {
    return cloneElement(action, {
      variant: 'p1',
      color: ALERT_TEXT_COLOR[variant],
    });
  }

  return (
    <Link variant="p1" color={ALERT_TEXT_COLOR[variant]}>
      {action}
    </Link>
  );
};
