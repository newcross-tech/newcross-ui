import { faCheck } from '@fortawesome/pro-light-svg-icons/faCheck';
import { faMinus } from '@fortawesome/pro-light-svg-icons/faMinus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OptionalProps } from '../../types';
import * as Styled from './Checkbox.style';
import { CheckboxPropsStrict } from './Checkbox.types';
import Typography, { TypographyColors } from '../Typography';
import { onSpacePressTrigger } from '../../utils';

export type CheckboxProps = OptionalProps<
  CheckboxPropsStrict,
  'allowTab' | 'disabled'
>;

const normalizeCheckboxProps = (props: CheckboxProps): CheckboxPropsStrict => ({
  ...props,
  allowTab: props.allowTab ?? true,
  disabled: props.disabled ?? false,
  onChange(selected, event) {
    if (this.disabled) return;

    event?.preventDefault();
    this.onChange?.(selected, event);
  },
});

const Checkbox = (_props: CheckboxProps) => {
  const props = normalizeCheckboxProps(_props);

  const icon = props.type === 'indeterminate' ? faMinus : faCheck;

  const getLabelColor = ({
    disabled,
    hasError,
  }: Pick<CheckboxProps, 'disabled' | 'hasError'>): TypographyColors => {
    if (disabled) return 'disabled';

    return hasError ? 'dangerError' : 'defaultDark';
  };

  return (
    <Styled.Checkbox alignItems="center" gap="xs" {...props} role="checkbox">
      <Styled.Box
        justifyContent="center"
        alignItems="center"
        m="xs"
        testID="checkmark-box"
        disabled={props.disabled}
        hasError={props.hasError}
        checked={!!props.checked}
        type={props.type}
      >
        {!!props.checked && (
          <FontAwesomeIcon
            data-testid={props.type ? 'indeterminate-icon' : 'checkmark-icon'}
            icon={icon}
          />
        )}
      </Styled.Box>
      {props.label && (
        <Typography
          testID="checkbox-label"
          variant="p1"
          color={getLabelColor(props)}
          onKeyDown={(event: React.KeyboardEvent<HTMLElement>) =>
            onSpacePressTrigger(
              event,
              props.onChange.bind(props, !props.checked)
            )
          }
          tabIndex={!props.disabled && props.allowTab ? 0 : -1}
        >
          {props.label}
        </Typography>
      )}
    </Styled.Checkbox>
  );
};

export default Checkbox;
