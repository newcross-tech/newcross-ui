import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import buttonStyle from './Button.style';
import { ButtonProps } from './Button.types';

const Button = ({ onPress, text, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      accessibilityRole="button"
      {...rest}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(buttonStyle);

export default Button;
