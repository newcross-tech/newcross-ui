import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';
import { GestureResponderEvent, Pressable, ViewStyle } from 'react-native';
import toggleStyle from './ToggleButton.style';
import { ClonedIcon } from './ToggleButton.types';
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
   * To toggle between auto and full width button
   */
  fullWidth?: boolean;
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
  /**
   * Set the left icon element.
   */
  leftIcon?: ReactElement;
  /**
   * Set the right icon element.
   */
  rightIcon?: ReactElement;
};

const ToggleButton = ({
  leftIcon,
  rightIcon,
  children,
  selected,
  onPress,
  fullWidth,
  value,
  testID,
  style,
  ...rest
}: ToggleButtonProps) => {
  const styles = toggleStyle({
    selected,
    fullWidth,
    leftIcon,
    rightIcon,
    children,
  });

  const renderIcon = ({ testID, leftIcon, rightIcon }: ToggleButtonProps) => {
    const icon = leftIcon || rightIcon;
    return (
      isValidElement(icon) &&
      cloneElement(icon, {
        testID: testID,
        style: styles.icon,
      } as ClonedIcon)
    );
  };

  const handleOnPress = (event: GestureResponderEvent) => {
    if (onPress) {
      onPress(event, value as string);
    }
  };
  return (
    <Pressable
      style={[styles.container, style]}
      onPress={handleOnPress}
      testID={selected ? `${testID}-selected` : `${testID}`}
      {...rest}
    >
      {leftIcon &&
        renderIcon({
          leftIcon,
          testID: 'toggle-button-left-icon',
          children,
        })}
      <Typography
        numberOfLines={1}
        variant={
          selected ? TypographyVariant.heading4 : TypographyVariant.paragraph2
        }
        style={styles.text}
      >
        {children}
      </Typography>
      {rightIcon &&
        renderIcon({
          rightIcon,
          testID: 'toggle-button-right-icon',
          children,
        })}
    </Pressable>
  );
};

export default ToggleButton;
