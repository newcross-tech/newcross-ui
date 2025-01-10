import { faXmark } from '@fortawesome/pro-light-svg-icons/faXmark';
import { OptionalProps } from '../../types';
import { onSpacePressTrigger } from '../../utils';
import * as Styled from './Alert.style';
import Container from '../Container';
import Icon from '../Icon';
import Typography from '../Typography';
import { ALERT_ICON, ALERT_TEXT_COLOR, ALERT_TITLES } from './constants';
import { AlertAction } from './AlertAction';
import { AlertPropsStrict } from './Alert.types';

export type AlertProps = OptionalProps<
  AlertPropsStrict,
  'hasTitle' | 'hasBorder' | 'fullWidth' | 'variant' | 'testID' | 'hasButton'
>;

const normalizeAlertProps = (props: AlertProps): AlertPropsStrict => ({
  ...props,
  hasTitle: props.hasTitle ?? true,
  hasBorder: props.hasBorder ?? true,
  hasButton: props.hasButton ?? false,
  fullWidth: props.fullWidth ?? true,
  variant: props.variant ?? 'success',
  testID: props.testID ?? 'alert',
});

const Alert = (_props: AlertProps) => {
  const props = normalizeAlertProps(_props);

  return (
    <Styled.Alert
      variant={props.variant}
      hasBorder={props.hasBorder}
      testID={`${props.testID}-component`}
      justifyContent="space-between"
      p="sm"
      gap="sm"
      fullWidth={props.fullWidth}
    >
      <Container gap="sm" p="sm" fullWidth>
        {props.icon || (
          <Icon
            icon={ALERT_ICON[props.variant]}
            variant="h3"
            color={ALERT_TEXT_COLOR[props.variant]}
            py="xs"
          />
        )}
        <Container flexDirection="column" gap="xs" fullWidth>
          {props.hasTitle && (
            <Typography variant="h3" color={ALERT_TEXT_COLOR[props.variant]}>
              {props.title ?? ALERT_TITLES[props.variant]}
            </Typography>
          )}
          {props.children && (
            <Typography variant="p1" color={ALERT_TEXT_COLOR[props.variant]}>
              {props.children}
            </Typography>
          )}
          {props.action && (
            <AlertAction action={props.action} variant={props.variant} />
          )}
        </Container>
      </Container>

      {props.hasButton && (
        <Styled.CloseIcon
          icon={faXmark}
          variant="h2"
          color={ALERT_TEXT_COLOR[props.variant]}
          tabIndex={0}
          onClick={props.onClose}
          testID={`${props.testID}-close-icon`}
          onKeyDown={(event) =>
            props.onClose && onSpacePressTrigger(event, props.onClose)
          }
          p="xs"
        />
      )}
    </Styled.Alert>
  );
};

export default Alert;
