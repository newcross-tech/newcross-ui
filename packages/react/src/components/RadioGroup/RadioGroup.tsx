import { Children, cloneElement, ReactElement, useState } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { TestProp } from '../../types/TestProp';
import { RadioProps } from '../Radio/Radio';
import { Container } from './RadioGroup.style';

export type RadioGroupProps = {
  /**
   * Used to display the group in either a row or a column.
   */
  direction?: 'row' | 'column';
  /**
   * The content of the component,
   */
  children: Array<ReactElement<RadioProps>>;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (value: string) => void;
  /**
   * selects a radio by default
   */
  defaultSelected?: string;
  /**
   * disables all radio buttons
   */
  disabled?: boolean;
} & TestProp;

const RadioGroup = ({
  direction = 'row',
  children,
  onChange,
  disabled = false,
  defaultSelected = '',
  ...rest
}: RadioGroupProps) => {
  const [selectedOption, setSelectedOption] = useState(defaultSelected);

  useToggle(defaultSelected, () => setSelectedOption(defaultSelected));

  const handleOnChange = (value: string) => {
    setSelectedOption(value);
    onChange && onChange(value);
  };

  return (
    <Container
      disabled={disabled}
      direction={direction}
      data-testid="radio-group"
      {...rest}
    >
      {Children.map(children, (child) => {
        const { value } = child.props;

        return cloneElement(child, {
          key: value,
          onChange: () => value && handleOnChange(value),
          selected: value === selectedOption,
          disabled,
        });
      })}
    </Container>
  );
};

export default RadioGroup;
