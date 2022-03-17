import { TextStyle, ViewStyle } from 'react-native';

export type RadioStyle = {
  container: ViewStyle;
  radio: ViewStyle;
  radioSelected: ViewStyle;
  radioLabel: TextStyle;
};

export type RadioProps = {
  disabled?: boolean;
  label?: string;
  onPress?: () => void;
  selected?: boolean;
};
