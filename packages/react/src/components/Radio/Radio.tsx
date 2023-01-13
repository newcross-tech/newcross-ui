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
   * Called when a single tap gesture is detected.
   */
  onChange?: (value: boolean) => void;
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
  testID,
}: RadioProps) => {
  const [isSelected, setIsSelected] = useState(selected);

  useToggle(selected, () => setIsSelected(selected));

  const onChangeHandler = () => {
    if (disabled) return;
    const newValue = !isSelected;
    setIsSelected(newValue);
    onChange && onChange(newValue);
  };

  const id = `${baseTestId}-input-${testID}`;

  return (
    <Styled.Radio>
      <input
        id={id}
        type="radio"
        data-testid={id}
        checked={isSelected}
        onChange={onChangeHandler}
        disabled={disabled}
        tabIndex={!disabled ? 0 : -1}
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
