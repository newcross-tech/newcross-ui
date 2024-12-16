import { AlertProps } from './Alert';
import { AlertVariant, TestProp } from '../../types';
import { ReactElement, ReactNode } from 'react';
import { LinkProps } from '../Link';

export type AlertActionProps = Required<Pick<AlertProps, 'action' | 'variant'>>;

/**
 * @private
 */
export type AlertPropsStrict = {
  /**
   * Whether the alert has a close button.
   */
  hasButton: boolean;
  /**
   * Whether the alert has a border.
   */
  hasBorder: boolean;
  /**
   * The action to trigger when the close button is pressed.
   */
  onClose?: VoidFunction;
  /**
   * Accepts a variant of the Alert.
   */
  variant: AlertVariant;
  /**
   * Overwrites a custom icon for the Alert.
   */
  icon?: ReactNode;
  /**
   * Whether the alert has a title.
   */
  hasTitle?: boolean;
  /**
   * Accepts a custom title.
   */
  title?: string;
  /**
   * Accepts children as the alert's message.
   */
  children?: ReactNode;
  /**
   * Whether the card is full width.
   */
  fullWidth: boolean;
  /**
   * The action to be displayed in the alert.
   */
  action?: ReactElement<LinkProps> | string;
} & TestProp;
