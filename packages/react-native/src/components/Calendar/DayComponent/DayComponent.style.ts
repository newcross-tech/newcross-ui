import { StyleSheet } from 'react-native';
import { ThemeDesignTokens } from '../../../theme/ThemeProvider';
import { BrandColorPrimary } from '@newcross-ui/design-tokens/build/js/native/healthforce';

const dayComponentStyles = (
  theme: ThemeDesignTokens,
  isAvailable?: boolean,
  isSelected?: boolean
) => {
  const {
    SpacingBase4,
    SpacingBase32,
    BorderBaseRadiusRounded,
    ColorBaseWhite100,
    ColorSemanticsSuccess200,
  } = theme;
  return StyleSheet.create({
    dayStyle: {
      position: 'relative',
      height: SpacingBase32,
      width: SpacingBase32,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: BorderBaseRadiusRounded,
      backgroundColor: isSelected ? BrandColorPrimary : ColorBaseWhite100,
      ...(isAvailable && {
        borderColor: ColorSemanticsSuccess200,
        borderWidth: 1,
        borderStyle: 'dashed',
      }),
    },
    dayIcon: {
      backgroundColor: ColorBaseWhite100,
      borderRadius: BorderBaseRadiusRounded,
      position: 'absolute',
      top: -SpacingBase4,
      right: -SpacingBase4,
    },
    currentDayIcon: {
      position: 'absolute',
      bottom: -SpacingBase4,
    },
  });
};

export default dayComponentStyles;
