import { TestProp } from '../../types/TestProp';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import * as Styled from './Radio.style';
import { RadioVariant } from './Radio.types';

export type RadioProps = {
  /**
   * Disable radio
   */
  disabled?: boolean;
  /**
   * Identifier of each radio component
   */
  label: string;
  /**
   * The currently selected value within the group or an array of
   * selected values
   */
  value: string | number;
  /**
   * Called when a single tap gesture is detected.
   */
  onChange?: (isSelected: string | number) => void;
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

const Radio = ({
  selected = false,
  disabled = false,
  label,
  onChange,
  value,
  testID = '',
  name,
  variant = 'primary',
}: RadioProps) => {
  const onChangeHandler = () => {
    if (disabled) return;
    onChange?.(value);
  };

  const id = `${baseTestId}-input-${value}`;

  return (
    <Styled.Radio variant={variant} selected={selected} disabled={disabled}>
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
};

export default Radio;
