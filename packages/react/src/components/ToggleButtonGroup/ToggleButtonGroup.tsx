import React, {
  Children,
  cloneElement,
  ReactElement,
  useCallback,
} from 'react';

import { ToggleButtonProps } from '../ToggleButton';
import { Container } from './ToggleButtonGroup.style';

export type ToggleButtonGroupProps = {
  /**
   * The content of the component.
   */
  children: Array<ReactElement<ToggleButtonProps>>;
  /**
   * The value to associate with the button when
   * selected in a ToggleButtonGroup
   */
  selectedValue: Array<string> | string;
  /**
   * Callback fired when the value changes and used when we want single selection of the toggle button group.
   */
  onSingleSelect?: (arg: string) => void;
  /**
   * Callback fired when the value changes and used when we want multiple selection of the toggle button group.
   */
  isMultiSelect?: (arg: Array<string>) => void;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
  /**
   * Used to display the group in either a row or a column.
   */
  direction?: 'row' | 'column';
};

export const getMultipleSelectedValues = (
  value: string,
  selectedValue: Array<string> | string
) => {
  if (Array.isArray(selectedValue)) {
    return selectedValue.includes(value)
      ? selectedValue.filter((selectedValue) => selectedValue !== value)
      : [...selectedValue, value];
  }
  return [];
};

const ToggleButtonGroup = ({
  children,
  selectedValue,
  direction,
  onSingleSelect,
  isMultiSelect,
  ...rest
}: ToggleButtonGroupProps) => {
  const calculateSelectedValue = (value: string) =>
    Array.isArray(selectedValue)
      ? selectedValue.includes(value)
      : selectedValue === value;

  const handleOnClick = useCallback(
    (value: string) => {
      onSingleSelect && onSingleSelect(value);
      isMultiSelect &&
        isMultiSelect(getMultipleSelectedValues(value, selectedValue));
    },
    [selectedValue]
  );

  return (
    <Container
      selectedValue={selectedValue}
      direction={direction}
      isOnMultiSelect={!!isMultiSelect}
      data-testid="toggle-button-group"
      {...rest}
    >
      {Children.map(children, (child) => {
        const { value, selected, fullWidth } = child.props;
        return cloneElement(child, {
          key: value,
          fullWidth: fullWidth,
          onClick: handleOnClick,
          selected: selected || calculateSelectedValue(value as string),
        });
      })}
    </Container>
  );
};

export default ToggleButtonGroup;
