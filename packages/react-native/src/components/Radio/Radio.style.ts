import { StyleSheet } from 'react-native';
import { PressedRadioProps, RadioStyle } from './Radio.types';
import useTheme from '../../hooks/useTheme';

export const pressedRadioStyle = ({ disabled, pressed }: PressedRadioProps) => [
  radioStyle(disabled).wrapper,
  { opacity: pressed ? 0.5 : 1 },
];

const radioStyle = (
  disabled: boolean | undefined
): StyleSheet.NamedStyles<RadioStyle> => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    wrapper: {
      padding: theme.RadioPaddingRight,
    },
    radio: {
      justifyContent: 'center',
      alignItems: 'center',
      width: theme.RadioWidth,
      height: theme.RadioHeight,
      borderWidth: theme.RadioBorderWidth,
      borderRadius: theme.RadioHeight / 2,
      borderColor: disabled
        ? theme.RadioDisabledBorderColor
        : theme.RadioBorderColor,
    },
    radioSelected: {
      width: theme.RadioSelectedWidth,
      height: theme.RadioSelectedHeight,
      backgroundColor: disabled
        ? theme.RadioSelectedDisabledBackgroundColor
        : theme.RadioSelectedBackgroundColor,
      borderRadius: theme.RadioSelectedHeight / 2,
    },
    radioLabel: {
      color: disabled ? theme.RadioDisabledColor : theme.RadioColor,
    },
    radioTextContainer: {
      flex: 1,
      paddingLeft: theme.RadioPaddingLeft,
      paddingRight: theme.RadioPaddingRight,
    },
  });
};

export default radioStyle;
