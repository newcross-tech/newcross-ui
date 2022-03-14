import { TextStyle, ViewStyle } from 'react-native';

export type RadioStyle = {
  container: ViewStyle;
  radio: ViewStyle;
  radioSelected: ViewStyle;
  radioText: TextStyle;
};

export type RadioProps = {
  disabled?: boolean;
  label?: string;
  onPress?: () => void;
  selected?: boolean;
};
