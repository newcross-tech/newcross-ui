import { TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';

export type ButtonProps = TouchableOpacityProps & { text: string };

export type ButtonStyle = {
  button: ViewStyle;
  buttonText: TextStyle;
};
