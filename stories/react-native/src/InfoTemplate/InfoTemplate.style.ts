import { StyleSheet } from 'react-native';
import { native } from '@newcross-ui/design-tokens';
import { isWebPlatform } from '../utils';

const {
  ColorBaseRed100,
  ColorBaseMint100,
  SpacingBase12,
  SpacingBase32,
  SpacingBase64,
  ColorBaseGrey200,
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
      borderColor: ColorBaseMint100,
      borderWidth: BorderBaseWidthSm,
      borderRadius: BorderBaseWidthLg,
      padding: SpacingBase12,
    },
    childrenExampleContainer: {
      maxWidth: isWebPlatform ? '350px' : undefined,
    },
    doStyle: { color: ColorBaseGrey200 },
    dontStyle: { color: ColorBaseRed100 },
    usagesText: { lineHeight: TypographyLineHeight24 },
  });
};

export default infoTemplateStyle;
