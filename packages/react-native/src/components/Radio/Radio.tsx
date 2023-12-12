import React, { ReactElement } from 'react';
import {
  Pressable,
  View,
  GestureResponderEvent,
  PressableProps,
  ViewStyle,
} from 'react-native';
import radioStyle, { pressedRadioStyle } from './Radio.style';
import { PressedRadioProps } from './Radio.types';
import Typography, { TypographyVariant } from '../Typography';

export type RadioProps = {
  /**
   * Disable radio
   */
  disabled?: boolean;
  /**
   * Identifier of each radio component
   */
  label?: string;
  /**
   * Pass complex content as radio description below label
   */
  content?: ReactElement;
  /**
   * Value identifier of each radio component. Used for radio groups
   */
  value?: string;
  /**
   * Called when a single tap gesture is detected.
   */
  onPress?: (event: GestureResponderEvent) => void;
  /**
   * Specifies whether the radio is selected
   */
  selected?: boolean;
  /**
   * Overwrites or extends the styles applied to the component's content.
   */
  containerStyle?: ViewStyle;
  /**
   * testID for end-to-end testing.
   */
  testID?: string;
} & PressableProps;

const Radio = ({
  selected = false,
  disabled = false,
  value = 'single-radio',
  label,
  content,
  onPress,
  containerStyle,
  testID,
}: RadioProps) => {
  const styles = radioStyle(disabled);

  const handlePress = (event: GestureResponderEvent) => {
    if (!disabled && onPress) {
      onPress(event);
    }
  };

  return (
    <View testID={value} style={[styles.container, containerStyle]}>
      <Pressable
        testID={testID}
        onPress={handlePress}
        disabled={disabled}
        style={({ pressed }) =>
          pressedRadioStyle({
            disabled,
            pressed,
          } as PressedRadioProps)
        }
      >
        <View testID="radio-view" style={styles.radio}>
          {selected && (
            <View testID="radio-selected-view" style={styles.radioSelected} />
          )}
        </View>
      </Pressable>
      <View style={styles.radioTextContainer}>
        {label && (
          <Typography
            variant={TypographyVariant.paragraph1}
            testID="radio-label"
            style={styles.radioLabel}
          >
            {label}
          </Typography>
        )}
        {content && <View testID="radio-content">{content}</View>}
      </View>
    </View>
  );
};

export default Radio;
