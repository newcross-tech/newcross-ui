import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-light-svg-icons/faCheck';
import { faMinus } from '@fortawesome/pro-light-svg-icons/faMinus';
import { CheckboxType } from './Checkbox.types';
import * as Styled from './Checkbox.style';
import Typography, { TypographyVariant } from '../Typography';

export type CheckboxProps = {
  /**
   * Sets the type the checkbox is - check or indeterminate
   */
  type?: CheckboxType;
  /**
   * Label for the checkbox
   */
  label: string;
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
  onChange?: (selected: boolean) => void;
  /**
   * Determines selected/checked state
   */
  checked?: boolean;
  /**
   * Accepts a test ID to be used for the checkbox.
   */
  testID?: string;
};

const Checkbox = ({
  onChange,
  checked,
  type,
  label,
  disabled = false,
  hasError,
  testID,
  ...rest
}: CheckboxProps) => {
  const [selected, setSelected] = useState(checked);

  const icon = type === CheckboxType.INDETERMINATE ? faMinus : faCheck;

  const handleChecked = () => {
    if (disabled) return;
    const currentValue = !selected;
    onChange && onChange(currentValue);
    setSelected(currentValue);
  };

  useEffect(() => {
    setSelected(checked);
  }, [checked]);

  return (
    <Styled.Checkbox
      data-testid={testID}
      disabled={disabled}
      label={label}
      onClick={handleChecked}
      {...rest}
    >
      <Styled.Box
        data-testid="checkmark-box"
        disabled={disabled}
        hasError={hasError}
        label={label}
        selected={selected}
        type={type}
      >
        {selected && (
          <FontAwesomeIcon
            data-testid={type ? 'indeterminate-icon' : 'checkmark-icon'}
            icon={icon}
          />
        )}
      </Styled.Box>
      <Styled.Label label={label} disabled={disabled}>
        <Typography variant={TypographyVariant.paragraph1}>{label}</Typography>
      </Styled.Label>
    </Styled.Checkbox>
  );
};

export default Checkbox;
