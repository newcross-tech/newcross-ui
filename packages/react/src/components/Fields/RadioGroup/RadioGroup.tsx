import { Children, cloneElement, ReactElement } from 'react';
import { TestProp } from '../../../types';
import { RadioProps } from '../Radio';
import { RadioValue, RadioVariant } from '../Radio/Radio.types';
import { Container, RadioItem } from './RadioGroup.style';
import { useUpstreamState } from '../../../hooks/useUpstreamState';

export type RadioGroupProps<T extends RadioValue> = {
  /**
   * Used to display the group in either a row or a column.
   */
  direction?: 'row' | 'column';
  /**
   * The content of the component,
   */
  children: Array<ReactElement<RadioProps<T>>>;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (value: T) => void;
  /**
   * selects a radio by default
   */
  defaultSelected?: T;
  /**
   * disables all radio buttons
   */
  disabled?: boolean;
  /**
   * Used to define background and border variant of all radio buttons
   */
  variant?: RadioVariant;
} & TestProp;

function RadioGroup<T extends RadioValue>({
  direction = 'row',
  children,
  onChange,
  disabled = false,
  defaultSelected,
  variant = 'primary',
  ...rest
}: RadioGroupProps<T>) {
  const [selectedOption, setSelectedOption] = useUpstreamState(defaultSelected);

  const handleOnChange = (value: T) => {
    setSelectedOption(value);
    onChange?.(value);
  };

  return (
    <Container
      disabled={disabled}
      direction={direction}
      data-testid="radio-group"
      {...rest}
    >
      {Children.map(children, (child) => {
        const { value, disabled: disabledItem } = child.props;

        return (
          <RadioItem direction={direction} variant={variant}>
            {cloneElement(child, {
              key: value,
              onChange: () => value && handleOnChange(value),
              selected: value === selectedOption,
              disabled: disabled || disabledItem,
              variant,
            })}
          </RadioItem>
        );
      })}
    </Container>
  );
}

export default RadioGroup;
