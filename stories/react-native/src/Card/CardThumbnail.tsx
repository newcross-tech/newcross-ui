import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import { View } from 'react-native';
import { Typography, TypographyVariant } from '@newcross-ui/react-native';
import { healthforce } from '@newcross-ui/design-tokens';

const { BorderBaseRadiusRounded, ColorBaseWhite, SpacingBase64, SpacingBase8 } =
  healthforce;

const CardThumbnail = (props: LinearGradientProps) => (
  <LinearGradient
    style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    start={{ x: 1, y: 1 }}
    {...props}
  >
    <View
      style={{
        overflow: 'hidden',
        borderRadius: BorderBaseRadiusRounded,
        height: SpacingBase64,
        width: SpacingBase64,
        margin: SpacingBase8,
      }}
    >
      <LinearGradient
        {...props}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Typography
          variant={TypographyVariant.heading4}
          style={{ color: ColorBaseWhite }}
        >
          XX
        </Typography>
        <Typography
          variant={TypographyVariant.heading2}
          style={{ color: ColorBaseWhite }}
        >
          XX
        </Typography>
      </LinearGradient>
    </View>
  </LinearGradient>
);

export default CardThumbnail;
