import { Children, cloneElement, useCallback } from 'react';
import { getMultipleSelectedValues } from './utils/getMultipleSelectedValues';
import { calculateSelectedValue } from './utils/calculateSelectedValue';
import {
  SingleSelect,
  MultiSelect,
  ToggleButtonGroupPropsStrict,
} from './ToggleButtonGroup.types';
import * as Styled from './ToggleButtonGroup.style';
import { OptionalProps } from '../../types';

export type ToggleButtonGroupProps = OptionalProps<
  ToggleButtonGroupPropsStrict,
  'direction'
>;

// this component will be updated so it doesn't always take up
// all the available space with this ticket https://newcross.atlassian.net/browse/HDS-52
const ToggleButtonGroup = ({
  children,
  selectedValue,
  direction,
  variant,
  ...rest
}: ToggleButtonGroupProps) => {
  const handleOnClick = useCallback(
    (value: string) => {
      if (variant === 'single') {
        const singleProps = rest as SingleSelect;
        singleProps.onToggle && singleProps.onToggle(value);
      } else {
        const multiProps = rest as MultiSelect;
        multiProps.onToggle &&
          multiProps.onToggle(
            getMultipleSelectedValues(value, selectedValue as string[])
          );
      }
    },
    [selectedValue]
  );

  return (
    <Styled.GroupWrapper
      flexDirection={direction}
      gap={'md'}
      testID="toggle-button-group"
      {...rest}
    >
      {Children.map(children, (child) => {
        const { value, selected, fullWidth } = child.props;
        return cloneElement(child, {
          key: value,
          fullWidth: fullWidth,
          onClick: handleOnClick,
          selected: selected || calculateSelectedValue(selectedValue, value),
          variant: variant,
        });
      })}
    </Styled.GroupWrapper>
  );
};

export default ToggleButtonGroup;
