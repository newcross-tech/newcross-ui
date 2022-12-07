import { useTransition } from '@react-spring/web';
import { ReactNode, useEffect } from 'react';
import { TestProp } from '../../types/TestProp';
import Alert, { AlertProps } from '../Alert';
import * as Styled from './Toast.style';

export type ToastProps = {
  /**
   * Pass a custom icon to show on the left side of message
   */
  customStatusIcon?: ReactNode;
  /**
   * Called when close icon is clicked or
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
} & TestProp &
  AlertProps;

const Toast = ({
  show,
  testID = 'toast',
  variant,
  onClose,
  message,
  customStatusIcon,
  autoHide = true,
  hasBorder = false,
  hasButton = true,
  duration = 6000,
  ...rest
}: ToastProps) => {
  const transition = useTransition(show, Styled.getAnimatedStyles());

  useEffect(() => {
    if (!show || !autoHide) return;

    const interval = setInterval(() => onClose(), duration);

    return () => clearInterval(interval);
  }, [show, autoHide]);

  return (
    <>
      {transition(
        (style, item) =>
          item && (
            <Styled.AnimatedContainer
              data-testid={`${testID}-component`}
              style={style}
            >
              <Alert
                icon={customStatusIcon}
                hasBorder={hasBorder}
                hasButton={!autoHide && hasButton}
                variant={variant}
                onClose={onClose}
                {...rest}
              >
                {message}
              </Alert>
            </Styled.AnimatedContainer>
          )
      )}
    </>
  );
};

export default Toast;
