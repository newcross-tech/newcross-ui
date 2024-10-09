import { ReactElement, ReactNode, useId } from 'react';
import { TestProp } from '../../types';
import { onSpacePressTrigger } from '../../utils';
import * as Styled from './Radio.style';
import { RadioValue, RadioVariant } from './Radio.types';

export type RadioProps<T extends RadioValue> = {
  /**
   * Disable radio
   */
  disabled?: boolean;
  /**
   * Identifier of each radio component
   */
  label: ReactNode;
  /**
   * The currently selected value within the group or an array of
   * selected values
   */
  value: T;
  /**
   * Called when a single tap gesture is detected.
   */
  onChange?: (isSelected: T) => void;
  /**
   * Specifies whether the radio is selected
   */
  selected?: boolean;
  /**
   * Specifies the name of the radio; if no such is provided, the id of the radio is used
   */
  name?: string;
  /**
   * Used to define background and border variant
   */
  variant?: RadioVariant;
} & TestProp;

const baseTestId = 'radio';

function Radio<T extends RadioValue>({
  selected = false,
  disabled = false,
  label,
  onChange,
  value,
  testID = '',
  name,
  variant = 'primary',
}: RadioProps<T>): ReactElement<RadioProps<T>> {
  const onChangeHandler = () => {
    if (disabled) return;
    onChange?.(value);
  };

  const id = `${baseTestId}-input-${value}-${useId()}`;

  return (
    <Styled.Radio
      variant={variant}
      selected={selected}
      disabled={disabled}
      onChange={onChangeHandler}
      as={variant === 'primary' ? 'div' : 'label'}
    >
      <input
        id={id}
        type="radio"
        data-testid={`${baseTestId}-input-${testID}`}
        name={name ?? id}
        checked={selected}
        onChange={onChangeHandler}
        disabled={disabled}
        onKeyPress={(event) => onSpacePressTrigger(event, onChangeHandler)}
      />
      <Styled.Label
        variant={'paragraph1'}
        testID={`${baseTestId}-label`}
        htmlFor={id}
      >
        {label}
      </Styled.Label>
    </Styled.Radio>
  );
}

export default Radio;
