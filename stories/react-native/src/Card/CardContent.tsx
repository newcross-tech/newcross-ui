import { Typography, TypographyVariant } from '@newcross-ui/react-native';
import { TextStyle, View, ViewStyle } from 'react-native';
import { native } from '@newcross-ui/design-tokens';

const { SpacingBase24 } = native.healthforce;

type CardContentProps = {
  style?: ViewStyle | TextStyle;
};

const CardContent = ({ style }: CardContentProps) => {
  return (
    <View style={style}>
      <Typography
        variant={TypographyVariant.heading6}
        style={{ alignSelf: 'flex-start' }}
      >
        Heading
      </Typography>
      <Typography
        variant={TypographyVariant.paragraph2}
        style={{ alignSelf: 'flex-start', marginBottom: SpacingBase24 }}
      >
        08:00 - 15:00
      </Typography>
      <Typography
        variant={TypographyVariant.heading7}
        style={{ alignSelf: 'flex-end' }}
      >
        £00.00
      </Typography>
    </View>
  );
};

export default CardContent;
