import { Children, cloneElement, ReactElement, useCallback } from 'react';
import { TestProp } from '../../types';
import { ToggleButtonProps } from '../ToggleButton';
import { Container } from './ToggleButtonGroup.style';
import { getMultipleSelectedValues } from './utils/getMultipleSelectedValues';
import { calculateSelectedValue } from './utils/calculateSelectedValue';
import { SingleSelect, MultiSelect } from './ToggleButtonGroup.types';

type ToggleButtonGroupGeneralProps = {
  /**
   * The content of the component.
   */
  children: Array<ReactElement<ToggleButtonProps>>;
  /**
   * Used to display the group in either a row or a column.
   */
  direction?: 'row' | 'column';
} & TestProp;

export type ToggleButtonGroupProps = (SingleSelect | MultiSelect) &
  ToggleButtonGroupGeneralProps;

const ToggleButtonGroup = ({
  children,
  selectedValue,
  direction,
  variant,
  ...rest
}: ToggleButtonGroupProps) => {
  const isMulti = variant === 'multi';

  const handleOnClick = useCallback(
    (value: string) => {
      if (variant === 'single') {
        const singleProps = rest as SingleSelect;
        singleProps.onToggle && singleProps.onToggle(value);
      } else {
        const multiProps = rest as MultiSelect;
        multiProps.onToggle &&
          multiProps.onToggle(getMultipleSelectedValues(value, selectedValue));
      }
    },
    [selectedValue]
  );

  return (
    <Container
      direction={direction}
      isMulti={isMulti}
      data-testid="toggle-button-group"
      {...rest}
    >
      {Children.map(children, (child) => {
        const { value, selected, fullWidth } = child.props;
        return cloneElement(child, {
          key: value,
          fullWidth: fullWidth,
          onClick: handleOnClick,
          selected: selected || calculateSelectedValue(selectedValue, value),
        });
      })}
    </Container>
  );
};

export default ToggleButtonGroup;
