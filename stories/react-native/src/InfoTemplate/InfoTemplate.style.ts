import { StyleSheet } from 'react-native';
import { native } from '@newcross-ui/design-tokens';
import { isWebPlatform } from '../utils';

const {
  ColorBaseRed200,
  ColorBaseGreen500,
  SpacingBase12,
  SpacingBase32,
  SpacingBase64,
  ColorBaseGrey100,
  BorderBaseWidthSm,
  BorderBaseWidthLg,
  TypographyLineHeight24,
} = native.healthforce;

const infoTemplateStyle = () => {
  return StyleSheet.create({
    storybookContainer: {
      alignItems: 'center',
    },
    container: {
      marginTop: isWebPlatform ? SpacingBase32 : SpacingBase64,
      width: isWebPlatform ? '60%' : '90%',
    },
    exampleContainer: {
      flex: 1,
      paddingHorizontal: SpacingBase12,
      borderColor: ColorBaseGrey100,
      borderWidth: BorderBaseWidthSm,
      borderRadius: BorderBaseWidthLg,
      padding: SpacingBase12,
    },
    childrenExampleContainer: {
      maxWidth: isWebPlatform ? '350px' : undefined,
    },
    doStyle: { color: ColorBaseGreen500 },
    dontStyle: { color: ColorBaseRed200 },
    usagesText: { lineHeight: TypographyLineHeight24 },
  });
};

export default infoTemplateStyle;
