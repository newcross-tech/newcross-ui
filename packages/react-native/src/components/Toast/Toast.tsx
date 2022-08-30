import { Pressable, ViewStyle, TextStyle } from 'react-native';
import React, { ReactNode, isValidElement, useEffect } from 'react';
import toastStyle from './Toast.style';
import Animated from 'react-native-reanimated';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import { faCircleCheck } from '@fortawesome/pro-solid-svg-icons/faCircleCheck';
import { faCircleInfo } from '@fortawesome/pro-solid-svg-icons/faCircleInfo';
import { faTriangleExclamation } from '@fortawesome/pro-solid-svg-icons/faTriangleExclamation';
import { ToastStatus } from './Toast.types';
import {
  DEFAULT_AUTO_HIDE,
  DEFAULT_DURATION,
  animatedProps,
} from './Toast.constants';
import Typography, { TypographyVariant } from '../Typography';
import useTheme from '../../hooks/useTheme';
import { delay } from './utils';

export type ToastProps = {
  /**
   * Pass a custom icon to show on the left side of message
   */
  customStatusIcon?: ReactNode;
  /**
   * Called when a single tap gesture is detected or
   * timeout has been reached
   */
  onClose: VoidFunction;
  /**
   * Pass the message for the toast notification
   */
  message: ReactNode | string;
  /**
   * Determines the status color of the toast
   */
  status: ToastStatus;
  /**
   * set how long the toast should appear for in ms
   */
  duration?: number;
  /**
   * state of toast visibility
   */
  show: boolean;
  /**
   * allows the toast to timeout based on the number given in duration
   * it also hides the close icon
   */
  autoHide?: boolean;
  /**
   * Overwrites or extends the styles applied to the component.
   */
  style?: ViewStyle | TextStyle;
};

const Toast = ({
  message,
  duration = DEFAULT_DURATION,
  onClose,
  autoHide = DEFAULT_AUTO_HIDE,
  status,
  customStatusIcon,
  show,
  style,
  ...rest
}: ToastProps) => {
  const styles = toastStyle({
    status,
    message,
    duration,
    show,
    autoHide,
    onClose,
  });
  const theme = useTheme();

  const icon = {
    [ToastStatus.info]: (
      <FontAwesomeIcon
        icon={faCircleInfo}
        size={theme.ToastStatusSize}
        style={styles.statusIcon}
      />
    ),
    [ToastStatus.success]: (
      <FontAwesomeIcon
        icon={faCircleCheck}
        size={theme.ToastStatusSize}
        style={styles.statusIcon}
      />
    ),
    [ToastStatus.warning]: (
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        size={theme.ToastStatusSize}
        style={styles.statusIcon}
      />
    ),
    [ToastStatus.error]: (
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        size={16}
        style={styles.statusIcon}
      />
    ),
  }[status as ToastStatus];

  useEffect(() => {
    if (!autoHide) return;
    autoHide && show && delay(onClose, duration);
  }, [show]);

  return (
    <>
      {show && (
        <Animated.View
          {...animatedProps}
          style={[styles.container, style]}
          {...rest}
        >
          {(isValidElement(customStatusIcon) && customStatusIcon) || icon}
          <Typography
            variant={TypographyVariant.paragraph2}
            style={styles.text}
          >
            {message}
          </Typography>
          {!autoHide && (
            <Pressable onPress={onClose} testID="toast-close-icon">
              <FontAwesomeIcon
                icon={faXmark}
                size={theme.ToastStatusSize}
                style={styles.closeIcon}
              />
            </Pressable>
          )}
        </Animated.View>
      )}
    </>
  );
};

export default Toast;
