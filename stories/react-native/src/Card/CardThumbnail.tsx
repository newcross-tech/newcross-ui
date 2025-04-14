import { View } from 'react-native';
import { Typography, TypographyVariant } from '@newcross-tech/ui-react-native';
import { native } from '@newcross-tech/ui-design-tokens';
import { ShiftCardDay, ShiftCardNight, ShiftCardSleeper } from './svg';

const { BrandColorPrimary, ColorNeutralWhite } = native.healthforce;

export type CardThumbnailProps = {
  shiftCardStatus?: string;
};

const CardThumbnail = ({ shiftCardStatus }: CardThumbnailProps) => (
  <View
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    }}
  >
    <View
      style={{
        zIndex: 100,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        position: 'absolute',
      }}
    >
      <Typography
        variant={TypographyVariant.heading4}
        style={{
          color:
            shiftCardStatus === 'day' ? BrandColorPrimary : ColorNeutralWhite,
        }}
      >
        XX
      </Typography>
      <Typography
        variant={TypographyVariant.heading2}
        style={{
          color:
            shiftCardStatus === 'day' ? BrandColorPrimary : ColorNeutralWhite,
        }}
      >
        XX
      </Typography>
    </View>
    {shiftCardStatus === 'day' && <ShiftCardDay />}
    {shiftCardStatus === 'night' && <ShiftCardNight />}
    {shiftCardStatus === 'sleeper' && <ShiftCardSleeper />}
  </View>
);

export default CardThumbnail;
