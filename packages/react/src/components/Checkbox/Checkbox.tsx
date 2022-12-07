import { faCheck } from '@fortawesome/pro-light-svg-icons/faCheck';
import { faMinus } from '@fortawesome/pro-light-svg-icons/faMinus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SyntheticEvent, useEffect, useState } from 'react';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import * as LabelStyled from '../Label/Label.style';
import { TypographyVariant } from '../Typography';
import * as Styled from './Checkbox.style';
import { CheckboxType } from './Checkbox.types';

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
  /**
   * Flag to enable/disable accessibility
   */
  allowTab?: boolean;
};

const Checkbox = ({
  onChange,
  checked,
  type,
  label,
  disabled = false,
  hasError,
  testID,
  allowTab = true,
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

  const onChangeHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    handleChecked();
  };

  useEffect(() => {
    setSelected(checked);
  }, [checked]);

  return (
    <Styled.Checkbox
      data-testid={testID}
      disabled={disabled}
      label={label}
      onClick={onChangeHandler}
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
      <LabelStyled.Label
        disabled={disabled}
        variant={TypographyVariant.paragraph1}
        onKeyPress={(event: React.KeyboardEvent<HTMLElement>) =>
          onSpacePressTrigger(event, handleChecked)
        }
        tabIndex={allowTab ? 0 : -1}
        data-testid={'checkmark-label'}
      >
        {label}
      </LabelStyled.Label>
    </Styled.Checkbox>
  );
};

export default Checkbox;
