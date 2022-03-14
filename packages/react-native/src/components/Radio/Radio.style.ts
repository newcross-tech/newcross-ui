import { StyleSheet } from 'react-native';
import { healthforce } from '@newcross-ui/design-tokens';
import { RadioStyle } from './Radio.types';

const {
  RadioHeight,
  RadioWidth,
  RadioBorderWidth,
  RadioBackgroundColor,
  RadioBorderColor,
  RadioSelectedHeight,
  RadioSelectedWidth,
  RadioSelectedBackgroundColor,
  RadioDisabledBorderColor,
  RadioSelectedDisabledBackgroundColor,
  SpacingBase4,
} = healthforce;

const radioStyle = (
  disabled: boolean | undefined
): StyleSheet.NamedStyles<RadioStyle> => ({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
    width: RadioWidth,
    height: RadioHeight,
    borderWidth: RadioBorderWidth,
    borderRadius: RadioHeight / 2,
    borderColor: disabled ? RadioDisabledBorderColor : RadioBorderColor,
    backgroundColor: RadioBackgroundColor,
  },
  radioSelected: {
    width: RadioSelectedWidth,
    height: RadioSelectedHeight,
    backgroundColor: disabled
      ? RadioSelectedDisabledBackgroundColor
      : RadioSelectedBackgroundColor,
    borderRadius: RadioSelectedHeight / 2,
  },
  radioText: { margin: SpacingBase4 },
});

export default radioStyle;
