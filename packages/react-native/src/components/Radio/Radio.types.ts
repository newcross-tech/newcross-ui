import { TextStyle, ViewStyle } from 'react-native';
import { RadioProps } from './Radio';

export type RadioStyle = {
  container: ViewStyle;
  wrapper: ViewStyle;
  radio: ViewStyle;
  radioSelected: ViewStyle;
  radioLabel: TextStyle;
};

export type PressedRadioProps = RadioProps & { pressed: boolean };
