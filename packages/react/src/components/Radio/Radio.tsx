import { ChangeEvent, useEffect, useState } from 'react';
import { TestProp } from '../../types/TestProp';
import { TypographyVariant } from '../Typography';
import * as Styled from './Radio.style';

export type RadioProps = {
  /**
   * Disable radio
   */
  disabled?: boolean;
  /**
   * Identifier of each radio component
   */
  label?: string;
  /**
   * Called when a single tap gesture is detected.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Specifies whether the radio is selected
   */
  selected?: boolean;
} & TestProp;

const Radio = ({
  selected = false,
  disabled = false,
  label,
  onChange,
  testID,
}: RadioProps) => {
  const [isSelected, setIsSelected] = useState(selected);

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const checkedValue = event.target.checked;
    setIsSelected(checkedValue);
    if (onChange) {
      onChange(event);
    }
  };

  const id = `radio-input-${testID}`;

  return (
    <Styled.Radio>
      <input
        id={id}
        type="radio"
        data-testid={id}
        checked={isSelected}
        onChange={onChangeHandler}
        disabled={disabled}
      />
      {label && (
        <Styled.Label
          variant={TypographyVariant.paragraph1}
          testID="radio-label"
          htmlFor={id}
        >
          {label}
        </Styled.Label>
      )}
    </Styled.Radio>
  );
};

export default Radio;
