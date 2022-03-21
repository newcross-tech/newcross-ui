import React, { FC } from 'react';
import { Pressable, View, Text } from 'react-native';
import radioStyle from './Radio.style';

export type RadioProps = {
  disabled?: boolean;
  label: string;
  onPress?: () => void;
  selected?: boolean;
};

const Radio: FC<RadioProps> = ({
  selected = false,
  disabled = false,
  label,
  onPress,
}) => {
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
        style={({ pressed }) => [
          { ...styles.wrapper, opacity: pressed ? 0.5 : 1 },
        ]}
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
