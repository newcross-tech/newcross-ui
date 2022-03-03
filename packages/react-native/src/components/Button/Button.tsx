import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonProps } from './Button.types';

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Text>Hello</Text>
    </TouchableOpacity>
  );
};

export default Button;
