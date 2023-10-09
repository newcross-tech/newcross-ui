import { useTransition } from '@react-spring/web';
import { ReactNode, useState } from 'react';
import { useTimeout } from '../../hooks/useTimeout';
import { TestProp } from '../../types';
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
  onClose?: VoidFunction;
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
  const [isShown, setShown] = useState(show);

  const transition = useTransition(isShown, Styled.getAnimatedStyles(onClose));

  useTimeout(duration, () => autoHide && setShown(false));

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
                onClose={() => setShown(false)}
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
