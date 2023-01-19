import { faCheck } from '@fortawesome/pro-light-svg-icons/faCheck';
import { faMinus } from '@fortawesome/pro-light-svg-icons/faMinus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SyntheticEvent, useState } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { TestProp } from '../../types/TestProp';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import * as LabelStyled from '../Label/Label.style';
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
  const [selected, setSelected] = useState(isChecked);

  useToggle(isChecked, () => setSelected(isChecked));

  const icon = type === 'indeterminate' ? faMinus : faCheck;

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
        variant={'paragraph1'}
        onKeyPress={(event: React.KeyboardEvent<HTMLElement>) =>
          onSpacePressTrigger(event, handleChecked)
        }
        tabIndex={!disabled && allowTab ? 0 : -1}
        data-testid={'checkbox-label'}
      >
        {label}
      </LabelStyled.Label>
    </Styled.Checkbox>
  );
};

export default Checkbox;
