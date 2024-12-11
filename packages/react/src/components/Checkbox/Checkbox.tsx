import { faCheck } from '@fortawesome/pro-light-svg-icons/faCheck';
import { faMinus } from '@fortawesome/pro-light-svg-icons/faMinus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OptionalProps } from '../../types';
import * as Styled from './Checkbox.style';
import {
  CheckboxPropsStrict,
  MouseEventOrKeyboardEvent,
} from './Checkbox.types';
import Typography, { TypographyColors } from '../Typography';
import { onSpacePressTrigger } from '../../utils';

export type CheckboxProps = OptionalProps<
  CheckboxPropsStrict,
  'allowTab' | 'testID' | 'disabled'
>;

const normalizeCheckboxProps = (props: CheckboxProps): CheckboxPropsStrict => ({
  ...props,
  allowTab: props.allowTab ?? true,
  testID: props.testID ?? '',
  disabled: props.disabled ?? false,
});

const Checkbox = (_props: CheckboxProps) => {
  const {
    testID,
    hasError,
    type,
    onChange,
    checked,
    disabled,
    allowTab,
    label,
    ...props
  } = normalizeCheckboxProps(_props);
  const isChecked = !!checked;

  const icon = type === 'indeterminate' ? faMinus : faCheck;

  const handleChecked = (event?: MouseEventOrKeyboardEvent) => {
    if (disabled) return;
    onChange?.(!checked, event);
  };

  const onChangeHandler = (event: MouseEventOrKeyboardEvent) => {
    event.preventDefault();
    handleChecked(event);
  };

  const getLabelColor = ({
    disabled,
    hasError,
  }: Pick<CheckboxProps, 'disabled' | 'hasError'>): TypographyColors => {
    if (disabled) return 'disabled';

    return hasError ? 'dangerError' : 'defaultDark';
  };

  return (
    <Styled.Checkbox
      alignItems="center"
      gap="xs"
      testID={testID}
      disabled={disabled}
      label={label}
      onClick={onChangeHandler}
      hasError={hasError}
      {...props}
      role="checkbox"
    >
      <Styled.Box
        justifyContent="center"
        alignItems="center"
        m="xs"
        testID="checkmark-box"
        disabled={disabled}
        hasError={hasError}
        label={label}
        selected={isChecked}
        type={type}
      >
        {isChecked && (
          <FontAwesomeIcon
            data-testid={type ? 'indeterminate-icon' : 'checkmark-icon'}
            icon={icon}
          />
        )}
      </Styled.Box>
      {label && (
        <Typography
          testID="checkbox-label"
          variant="p1"
          color={getLabelColor({ disabled, hasError })}
          onKeyDown={(event: React.KeyboardEvent<HTMLElement>) =>
            onSpacePressTrigger(event, handleChecked)
          }
          tabIndex={!disabled && allowTab ? 0 : -1}
        >
          {label}
        </Typography>
      )}
    </Styled.Checkbox>
  );
};

export default Checkbox;
