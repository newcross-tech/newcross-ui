import { TextStyle, ViewStyle } from 'react-native';
import { RadioProps } from './Radio';

export type RadioStyle = {
  container: ViewStyle;
  radioContainer: ViewStyle;
  wrapper: ViewStyle;
  radio: ViewStyle;
  radioSelected: ViewStyle;
  radioTextContainer: ViewStyle;
  radioLabel: TextStyle;
};

export type PressedRadioProps = RadioProps & { pressed: boolean };
