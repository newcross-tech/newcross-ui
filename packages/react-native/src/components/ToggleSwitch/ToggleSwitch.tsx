import React from 'react';
import {
  Switch,
  ColorValue,
  SwitchChangeEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import useTheme from '../../hooks/useTheme';

export type ToggleSwitchProps = {
  /**
   * Color of the foreground switch grip.
   */
  thumbColor?: ColorValue;

  /**
   * Custom colors for the switch track
   *
   * Color when false and color when true
   */
  trackColor?: {
    false?: ColorValue;
    true?: ColorValue;
  };

  /**
   * If true the user won't be able to toggle the switch.
   * Default value is false.
   */
  disabled?: boolean;

  /**
   * Invoked with the change event as an argument when the value changes.
   */
  onChange?: (event: SwitchChangeEvent) => void;

  /**
   * Invoked with the new value when the value changes.
   */
  onValueChange?: (value: boolean) => void;

  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;

  /**
   * The value of the switch. If true the switch will be turned on.
   * Default value is false.
   */
  value?: boolean;

  /**
   * On iOS, custom color for the background.
   * Can be seen when the switch value is false or when the switch is disabled.
   */
  ios_backgroundColor?: ColorValue;

  /**
   * Used to change the style of the Toggle Switch component.
   */
  style?: StyleProp<ViewStyle>;
};

const ToggleSwitch = ({
  trackColor,
  thumbColor,
  ios_backgroundColor,
  ...rest
}: ToggleSwitchProps) => {
  const theme = useTheme();

  const {
    ToggleSwitchTrackColorInactive,
    ToggleSwitchTrackColorActive,
    ToggleSwitchThumbColor,
  } = theme;

  return (
    <Switch
      trackColor={
        trackColor || {
          false: ToggleSwitchTrackColorInactive,
          true: ToggleSwitchTrackColorActive,
        }
      }
      thumbColor={thumbColor || ToggleSwitchThumbColor}
      ios_backgroundColor={
        ios_backgroundColor || ToggleSwitchTrackColorInactive
      }
      testID="toggle-switch"
      {...rest}
    />
  );
};

export default ToggleSwitch;
