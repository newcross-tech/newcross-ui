import { useTransition } from '@react-spring/web';
import { useState } from 'react';
import { useTimeout } from '../../hooks/useTimeout';
import { OptionalProps } from '../../types';
import Alert from '../Alert';
import * as Styled from './Toast.style';
import { ToastPropsStrict } from './Toast.types';

export type ToastProps = OptionalProps<
  ToastPropsStrict,
  'autoHide' | 'hasBorder' | 'hasButton' | 'variant' | 'duration'
>;

const normalizeToastProps = (props: ToastProps): ToastPropsStrict => ({
  ...props,
  autoHide: props.autoHide ?? true,
  hasBorder: props.hasBorder ?? false,
  variant: props.variant ?? 'success',
  get hasButton() {
    return props.hasButton || !this.autoHide;
  },
  duration: props.duration ?? 6000,
  testID: props.testID ?? 'toast',
});

const Toast = (_props: ToastProps) => {
  const { testID, ...props } = normalizeToastProps(_props);

  const [isShown, setIsShown] = useState(props.show);

  const transition = useTransition(isShown, Styled.getAnimatedStyles(props));

  useTimeout(props.duration, () => props.autoHide && setIsShown(false));

  return (
    <>
      {transition(
        (style, item) =>
          item && (
            <Styled.AnimatedContainer
              testID={`${testID}-component`}
              style={style}
              width={props.width}
              flexDirection="column"
            >
              <Alert
                icon={props.customStatusIcon}
                {...props}
                onClose={() => {
                  props.onClose?.();
                  setIsShown(false);
                }}
              >
                {props.message}
              </Alert>
            </Styled.AnimatedContainer>
          )
      )}
    </>
  );
};

export default Toast;
