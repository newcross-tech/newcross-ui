import { ReactNode } from 'react';
import { RequiredProps, TestProp } from '../../types';
import { AlertProps } from '../Alert';

export type ToastPropsStrict = {
  /**
   * Pass a custom icon to show on the left side of message
   */
  customStatusIcon?: ReactNode;
  /**
   * Called when close icon is clicked or
   * timeout has been reached
   */
  onClose?: VoidFunction;
  /**
   * Pass the message for the toast notification
   */
  message: ReactNode | string;
  /**
   * Pass the width of the toast
   */
  width?: string;
  /**
   * set how long the toast should appear for in ms
   */
  duration: number;
  /**
   * state of toast visibility
   */
  show: boolean;
  /**
   * allows the toast to timeout based on the number given in duration
   * it also hides the close icon
   */
  autoHide: boolean;
} & TestProp &
  RequiredProps<AlertProps, 'hasBorder' | 'hasButton' | 'variant'>;
