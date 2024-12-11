import { ReactNode } from 'react';
import { faCheck } from '@fortawesome/pro-light-svg-icons/faCheck';
import { faMinus } from '@fortawesome/pro-light-svg-icons/faMinus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TestProp } from '../../types';
import * as Styled from './Checkbox.style';
import { CheckboxType, MouseEventOrKeyboardEvent } from './Checkbox.types';
import Typography, { TypographyColors } from '../Typography';
import { onSpacePressTrigger } from '../../utils';

export type CheckboxProps = {
  /**
   * Sets the type the checkbox is - check or indeterminate
   */
  type?: CheckboxType;
  /**
   * Label for the checkbox
   */
  label?: ReactNode;
  /**
   * Whether the press behavior is disabled.
   */
  disabled?: boolean;
  /**
   * Shows different styles when error is true
   */
  hasError?: boolean;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (selected: boolean, event?: MouseEventOrKeyboardEvent) => void;
  /**
   * Determines selected/checked state
   */
  checked?: boolean;
  /**
   * Flag to enable/disable accessibility
   */
  allowTab?: boolean;
} & TestProp;

const Checkbox = ({
  onChange,
  checked,
  type,
  label,
  disabled = false,
  hasError,
  testID = '',
  allowTab = true,
  ...rest
}: CheckboxProps) => {
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
      {...rest}
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
