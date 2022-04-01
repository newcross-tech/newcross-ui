import React from 'react';
import { Pressable, View, Text } from 'react-native';
import radioStyle, { pressedRadioStyle } from './Radio.style';
import { PressedRadioProps } from './Radio.types';

export type RadioProps = {
  disabled?: boolean;
  label?: string;
  onPress?: () => void;
  selected?: boolean;
};

const Radio = ({
  selected = false,
  disabled = false,
  label,
  onPress,
}: RadioProps) => {
  const styles = radioStyle(disabled);

  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
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
        <Text testID="radio-label" style={styles.radioLabel}>
          {label}
        </Text>
      )}
    </View>
  );
};

export default Radio;
