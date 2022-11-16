import { ViewStyle, TextStyle } from 'react-native';
import React, { ReactNode, useEffect } from 'react';
import toastStyle from './Toast.style';
import Animated, { ComplexAnimationBuilder } from 'react-native-reanimated';
import {
  DEFAULT_AUTO_HIDE,
  DEFAULT_DURATION,
  animatedProps,
} from './Toast.constants';
import Alert, { AlertProps } from '../Alert';
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
  /**
   * testID for end to end testing.
   */
  testID?: string;
  /**
   * Overwrites the Animation props for the Toast.
   */
  customAnimatedProps?: {
    entering: ComplexAnimationBuilder;
    exiting: ComplexAnimationBuilder;
  };
} & AlertProps;

const Toast = ({
  message,
  hasCloseButton = true,
  hasBorder = false,
  duration = DEFAULT_DURATION,
  onClose,
  autoHide = DEFAULT_AUTO_HIDE,
  variant,
  show,
  style,
  customAnimatedProps,
  ...rest
}: ToastProps) => {
  const styles = toastStyle();

  const animationProps = customAnimatedProps || animatedProps;

  useEffect(() => {
    if (!autoHide || !show) {
      return;
    }
    const interval = delay(onClose, duration);

    return () => clearInterval(interval);
  }, [show]);

  return (
    <>
      {show && (
        <Animated.View {...animationProps} style={[styles.container, style]}>
          <Alert
            hasBorder={hasBorder}
            hasCloseButton={hasCloseButton}
            variant={variant}
            onCloseButtonPress={onClose}
            {...rest}
          >
            {message}
          </Alert>
        </Animated.View>
      )}
    </>
  );
};

export default Toast;
