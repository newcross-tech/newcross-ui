import { faCheck } from '@fortawesome/pro-light-svg-icons/faCheck';
import { faMinus } from '@fortawesome/pro-light-svg-icons/faMinus';
import { OptionalProps } from '../../../types';
import * as Styled from './Checkbox.style';
import { CheckboxPropsStrict } from './Checkbox.types';
import Typography from '../../Typography';
import { onSpacePressTrigger } from '../../../utils';
import Icon from '../../Icon';
import { getTextColor } from '../Fields.style';

export type CheckboxProps = {
  onChange?(
    selected: boolean,
    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ): void;
} & OptionalProps<
  Omit<CheckboxPropsStrict, 'onClick' | 'onChange'>,
  'allowTab' | 'disabled' | 'checked' | 'hasError' | 'labelVariant' | 'mode'
>;

const normalizeCheckboxProps = (props: CheckboxProps): CheckboxPropsStrict => {
  const normalized: CheckboxPropsStrict = {
    ...props,
    mode: props.mode ?? 'light',
    labelVariant: props.labelVariant ?? 'p1',
    allowTab: props.allowTab ?? true,
    disabled: props.disabled ?? false,
    checked: props.checked ?? false,
    hasError: props.hasError ?? false,
    onClick(event) {
      normalized.onChange(event);
    },
    onChange(event) {
      event?.preventDefault();

      if (normalized.disabled) return;

      props.onChange?.(!normalized.checked, event);
    },
  };
  return normalized;
};

const Checkbox = (_props: CheckboxProps) => {
  const props = normalizeCheckboxProps(_props);

  const icon = props.type === 'indeterminate' ? faMinus : faCheck;

  return (
    <Styled.Checkbox alignItems="center" gap="xs" {...props} role="checkbox">
      <Styled.Box
        justifyContent="center"
        alignItems="center"
        m="xs"
        testID="checkmark-box"
        disabled={props.disabled}
        hasError={props.hasError}
        checked={props.checked}
        type={props.type}
      >
        {props.checked && (
          <Icon
            testID={props.type ? 'indeterminate-icon' : 'checkmark-icon'}
            variant="p2"
            icon={icon}
          />
        )}
      </Styled.Box>
      {props.label && (
        <Typography
          testID="checkbox-label"
          variant={props.labelVariant}
          color={getTextColor.primaryText(props)}
          mode={props.mode}
          onKeyDown={(event) => onSpacePressTrigger(event, props.onChange)}
          tabIndex={!props.disabled && props.allowTab ? 0 : -1}
        >
          {props.label}
        </Typography>
      )}
    </Styled.Checkbox>
  );
};

export default Checkbox;
