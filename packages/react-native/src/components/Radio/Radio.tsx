import React, { FC } from 'react';
import { Pressable, View, Text } from 'react-native';
import radioStyle from './Radio.style';
import { RadioProps } from './Radio.types';

const Radio: FC<RadioProps> = ({ selected, disabled, label, onPress }) => {
  const styles = radioStyle(disabled);

  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View testID="radio-view" style={styles.radio}>
        {selected && (
          <View
            testID="radio-selected-view"
            style={styles.radioSelected}
          ></View>
        )}
      </View>
      {label && (
        <Text testID="radio-label" style={styles.radioLabel}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};

export default Radio;
