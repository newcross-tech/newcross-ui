import { useState } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { TestProp } from '../../types/TestProp';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import * as Styled from './Radio.style';

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
  value?: string;
  /**
   * Called when a single tap gesture is detected.
   */
  onChange?: VoidFunction;
  /**
   * Specifies whether the radio is selected
   */
  selected?: boolean;
} & TestProp;

const baseTestId = 'radio';

const Radio = ({
  selected = false,
  disabled = false,
  label,
  onChange,
  value = '',
  testID = '',
}: RadioProps) => {
  const [isSelected, setIsSelected] = useState(selected);

  useToggle(selected, () => setIsSelected(selected));

  const onChangeHandler = () => {
    if (disabled) return;

    setIsSelected(!isSelected);
    onChange && onChange();
  };

  const id = `${baseTestId}-input-${value}`;

  return (
    <Styled.Radio>
      <input
        id={id}
        type="radio"
        data-testid={`${baseTestId}-input-${testID}`}
        name={id}
        checked={isSelected}
        onChange={onChangeHandler}
        disabled={disabled}
        onKeyPress={(event) =>
          onSpacePressTrigger(event, () => onChangeHandler())
        }
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
