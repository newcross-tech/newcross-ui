import React, {
  Children,
  cloneElement,
  ReactElement,
  useCallback,
} from 'react';
import { View, ViewStyle } from 'react-native';
import { ToggleButtonProps } from '../ToggleButton';
import toggleButtonGroupStyle from './ToggleButtonGroup.style';
import { ToggleButtonGroupOrientation } from './ToggleButtonGroup.types';
import useTheme from '../../hooks/useTheme';

export type ToggleButtonGroupProps = {
  /**
   * The content of the component
   */
  children: Array<ReactElement<ToggleButtonProps>>;
  /**
   * The value to associate with the button when
   * selected in a ToggleButtonGroup
   */
  selectedValue: Array<string> | string;
  /**
   * Callback fired when the value changes
   */
  onSelect: (arg: Array<string> | string) => void;
  /**
   * If true, the ToggleButtons enable multiple buttons to be selected
   */
  selectMultiple?: boolean;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
  /**
   * Used to display the group in either  a row or a column.
   */
  orientation?: ToggleButtonGroupOrientation;
  /**
   * Used to assert a gap between items.
   */
  gap?: number;
  /**
   * Used to style the toggle button group container.
   */
  style?: ViewStyle;
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

export const calculateGap = (
  gap: number,
  isLastChild: boolean,
  orientation: ToggleButtonGroupOrientation
) => {
  if (orientation === ToggleButtonGroupOrientation.vertical) {
    return {
      flex: 1,
      marginBottom: !isLastChild ? gap : 0,
    };
  }
  return {
    flex: 1,
    marginRight: !isLastChild ? gap : 0,
  };
};

const ToggleButtonGroup = ({
  children,
  selectedValue,
  selectMultiple,
  onSelect,
  orientation = ToggleButtonGroupOrientation.horizontal,
  style,
  gap,
  ...rest
}: ToggleButtonGroupProps) => {
  const theme = useTheme();
  const styles = toggleButtonGroupStyle(
    orientation as ToggleButtonGroupOrientation
  );

  const calculateSelectedValue = (value: string) =>
    Array.isArray(selectedValue)
      ? selectedValue.includes(value)
      : selectedValue === value;

  const handleOnPress = useCallback(
    (_, value: string) => {
      const values = selectMultiple
        ? getMultipleSelectedValues(value, selectedValue)
        : value;

      onSelect(values);
    },
    [selectedValue]
  );

  return (
    <View style={[styles.container, style]} {...rest}>
      {Children.map(children, (child, index) => {
        const { value, style } = child.props;
        const isLastChild = children.length - 1 === index;

        return cloneElement(child, {
          key: value,
          selected: calculateSelectedValue(value as string),
          onPress: handleOnPress,
          style: {
            ...style,
            ...calculateGap(
              gap ?? theme.ToggleButtonItemsGap,
              isLastChild,
              orientation
            ),
          },
        });
      })}
    </View>
  );
};

export default ToggleButtonGroup;
