import { StyleSheet } from 'react-native';
import { healthforce } from '@newcross-ui/design-tokens';
import { RadioStyle } from './Radio.types';

const {
  RadioHeight,
  RadioWidth,
  RadioBorderWidth,
  RadioBorderColor,
  RadioSelectedHeight,
  RadioSelectedWidth,
  RadioSelectedBackgroundColor,
  RadioDisabledBorderColor,
  RadioSelectedDisabledBackgroundColor,
  RadioLabelLineHeight,
  RadioPadding,
  RadioLabelFontFamily,
  SpacingBase4,
} = healthforce;

const radioStyle = (
  disabled: boolean | undefined
): StyleSheet.NamedStyles<RadioStyle> => ({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  wrapper: {
    padding: RadioPadding,
  },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
    width: RadioWidth,
    height: RadioHeight,
    borderWidth: RadioBorderWidth,
    borderRadius: RadioHeight / 2,
    borderColor: disabled ? RadioDisabledBorderColor : RadioBorderColor,
  },
  radioSelected: {
    width: RadioSelectedWidth,
    height: RadioSelectedHeight,
    backgroundColor: disabled
      ? RadioSelectedDisabledBackgroundColor
      : RadioSelectedBackgroundColor,
    borderRadius: RadioSelectedHeight / 2,
  },
  radioLabel: {
    paddingLeft: SpacingBase4,
    lineHeight: RadioLabelLineHeight,
    fontFamily: RadioLabelFontFamily,
    paddingRight: RadioPadding,
  },
});

export default radioStyle;
