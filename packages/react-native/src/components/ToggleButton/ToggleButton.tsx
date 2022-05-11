import React, { cloneElement, isValidElement, ReactNode } from 'react';
import {
  Pressable,
  GestureResponderEvent,
  View,
  ViewStyle,
} from 'react-native';
import toggleStyle from './ToggleButton.style';
import { ToggleButtonColors } from './ToggleButton.types';
import Typography, { TypographyVariant } from '../Typography';

export type ToggleButtonProps = {
  /**
   * Called when a single tap gesture is detected.
   */
  onPress?: (event: GestureResponderEvent, value: string) => void;
  /**
   * Either children or a render prop that receives a boolean
   * reflecting whether the component is currently pressed.
   */
  children?: ReactNode | string;
  /**
   * Specifies whether the toggle button is selected
   */
  selected?: boolean;
  /**
   * Used to define background color
   */
  color?: ToggleButtonColors;
  /**
   * To toggle between auto and full width button
   */
  fullWidth?: boolean;
  /**
   * pass icon to show on the left side of text
   */
  icon?: ReactNode;
  /**
   * The currently selected value within the group or an array of
   * selected values
   */
  value?: string;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
  /**
   * Used to style the toggle button container.
   */
  style?: ViewStyle;
};

const ToggleButton = ({
  children,
  selected,
  color = ToggleButtonColors.primary,
  onPress,
  fullWidth,
  icon,
  value,
  testID,
  style,
  ...rest
}: ToggleButtonProps) => {
  const styles = toggleStyle({ selected, color, fullWidth });

  const handleOnPress = (event: GestureResponderEvent) => {
    if (onPress) {
      onPress(event, value as string);
    }
  };
  return (
    <Pressable
      style={[styles.container, style]}
      onPress={handleOnPress}
      testID={testID}
      {...rest}
    >
      {selected && (
        <View style={styles.insetShadow} testID={`${testID}-inset-shadow`} />
      )}
      {isValidElement(icon) && cloneElement(icon, { style: styles.icon })}
      <Typography variant={TypographyVariant.paragraph1} style={styles.text}>
        {children}
      </Typography>
    </Pressable>
  );
};

export default ToggleButton;
