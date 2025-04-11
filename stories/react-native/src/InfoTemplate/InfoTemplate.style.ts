import { StyleSheet } from 'react-native';
import { native } from '@newcross-tech/ui-design-tokens';
import { isWebPlatform } from '../utils';

const {
  ColorSemanticsError100,
  SpacingBase12,
  SpacingBase32,
  SpacingBase64,
  ColorNeutralGrey200,
  BorderBaseWidthSm,
  BorderBaseWidthLg,
  TypographyLineHeight24,
  ColorSemanticsSuccess100,
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
      borderColor: ColorNeutralGrey200,
      borderWidth: BorderBaseWidthSm,
      borderRadius: BorderBaseWidthLg,
      padding: SpacingBase12,
    },
    childrenExampleContainer: {
      maxWidth: isWebPlatform ? '350px' : undefined,
    },
    doStyle: { color: ColorSemanticsSuccess100 },
    dontStyle: { color: ColorSemanticsError100 },
    usagesText: { lineHeight: TypographyLineHeight24 },
  });
};

export default infoTemplateStyle;
