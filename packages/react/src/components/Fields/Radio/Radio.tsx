import { ReactElement, ReactNode, useId } from 'react';
import { Mode, TestProp } from '../../../types';
import { onSpacePressTrigger } from '../../../utils';
import * as Styled from './Radio.style';
import { RadioValue, RadioVariant } from './Radio.types';
import Container from '../../Container';
import Label from '../../Fields/Label';
import { TypographyVariant } from '../../Typography';

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
   * Applies the theme typography styles to the label
   */
  labelVariant?: TypographyVariant;
  /**
   * Applies the theme color styles to the label
   */
  mode?: Mode;
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
  /**
   * Used to define color variant of the radio
   */
  hasError?: boolean;
} & TestProp;

const baseTestId = 'radio';

function Radio<T extends RadioValue>({
  selected = false,
  disabled = false,
  label,
  labelVariant = 'paragraph1',
  mode,
  onChange,
  value,
  testID = '',
  name,
  variant = 'primary',
  hasError = false,
}: RadioProps<T>): ReactElement<RadioProps<T>> {
  const onChangeHandler = () => {
    if (disabled) return;
    onChange?.(value);
  };

  const id = `${baseTestId}-input-${value}-${useId()}`;

  return (
    <Styled.Radio
      alignItems="center"
      p={'sm'}
      gap="xs"
      variant={variant}
      selected={selected}
      disabled={disabled}
      hasError={hasError}
      onChange={onChangeHandler}
      semanticTag={variant === 'primary' ? 'div' : 'label'}
    >
      <Container p="xs">
        <input
          id={id}
          type="radio"
          data-testid={`${baseTestId}-input-${testID}`}
          name={name ?? id}
          checked={selected}
          onChange={onChangeHandler}
          disabled={disabled}
          onKeyDown={(event) => onSpacePressTrigger(event, onChangeHandler)}
        />
      </Container>
      <Label
        variant={labelVariant}
        mode={mode}
        testID={`${baseTestId}-label`}
        htmlFor={id}
        hasError={hasError}
        disabled={disabled}
      >
        {label}
      </Label>
    </Styled.Radio>
  );
}

export default Radio;
