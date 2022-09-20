import React from 'react';
import { Pressable, View, GestureResponderEvent } from 'react-native';
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
   * Called when a single tap gesture is detected.
   */
  onPress?: (event: GestureResponderEvent) => void;
  /**
   * Specifies whether the radio is selected
   */
  selected?: boolean;
};

const Radio = ({
  selected = false,
  disabled = false,
  label,
  onPress,
}: RadioProps) => {
  const styles = radioStyle(disabled);

  const handlePress = (event: GestureResponderEvent) => {
    if (!disabled && onPress) {
      onPress(event);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress}
        disabled={disabled}
        style={({ pressed }) =>
          pressedRadioStyle({ disabled, pressed } as PressedRadioProps)
        }
      >
        <View testID="radio-view" style={styles.radio}>
          {selected && (
            <View testID="radio-selected-view" style={styles.radioSelected} />
          )}
        </View>
      </Pressable>
      {label && (
        <Typography
          variant={TypographyVariant.paragraph2}
          testID="radio-label"
          style={styles.radioLabel}
        >
          {label}
        </Typography>
      )}
    </View>
  );
};

export default Radio;
