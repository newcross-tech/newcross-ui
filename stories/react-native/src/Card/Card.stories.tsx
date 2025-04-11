import { Meta, Story } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import {
  Badge,
  Card,
  CardColors,
  CardProps,
  Typography,
  TypographyVariant,
} from '@newcross-tech/ui-react-native';
import { native } from '@newcross-tech/ui-design-tokens';
import Container from '../Container';
import Spacing from '../Spacing';
import CardContent from './CardContent';
import CardThumbnail from './CardThumbnail';
import { getParameters } from '../utils';
import { BadgeBlack, Badge as BadgeSVG } from './svg';
import { View, Platform, ScrollView } from 'react-native';
import { ExtraCardContent } from './ExtraCardContent';

const { SpacingBase24, CardPadding, SpacingBase12, ColorPrimaryGravitas } =
  native.healthforce;

export default {
  title: 'ReactNative/Components/Card',
  component: Card,
  parameters: getParameters(),
} as Meta;

export const Variants: Story<CardProps> = () => {
  const isWeb = Platform.OS === 'web';

  return (
    <ScrollView>
      <Container>
        <Card hasRoundedCorners isPressable={false}>
          <FontAwesomeIcon icon={faUser} size={SpacingBase24} />
          <Typography
            variant={TypographyVariant.heading3}
            style={{ marginLeft: SpacingBase12, marginRight: SpacingBase12 }}
          >
            My Profile
          </Typography>
          <Badge badgeContent={7} />
        </Card>
        <Spacing />
        <Card
          hasRoundedCorners
          thumbnailContent={<CardThumbnail shiftCardStatus="day" />}
        >
          <CardContent />
          <View
            style={{
              position: 'absolute',
              alignSelf: 'flex-start',
              marginTop: isWeb ? -CardPadding : 0,
              paddingRight: CardPadding,
              right: 0,
            }}
          >
            <BadgeBlack />
          </View>
        </Card>
        <Spacing />
        <Card
          hasRightIcon
          hasBorder
          hasRoundedCorners
          thumbnailContent={<CardThumbnail shiftCardStatus="sleeper" />}
        >
          <CardContent />
          <View
            style={{
              position: 'absolute',
              alignSelf: 'flex-start',
              marginTop: isWeb ? -CardPadding : 0,
              paddingRight: CardPadding,
              right: 0,
            }}
          >
            <BadgeSVG />
          </View>
        </Card>
        <Spacing />
        <Card
          hasRightIcon
          hasBorder
          thumbnailContent={<CardThumbnail shiftCardStatus="night" />}
          rightIconContent={<Badge badgeContent={7} />}
        >
          <CardContent />
        </Card>
        <Spacing />

        <Card
          hasRightIcon
          hasRoundedCorners
          hasBorder
          fullWidth
          color={CardColors.secondary}
          thumbnailContent={<CardThumbnail shiftCardStatus="day" />}
        >
          <CardContent style={{ flex: 1 }} />
          <View
            style={{
              position: 'absolute',
              alignSelf: 'flex-start',
              marginTop: isWeb ? -CardPadding : 0,
              paddingRight: CardPadding,
              right: 0,
            }}
          >
            <BadgeBlack />
          </View>
        </Card>
        <Spacing />
        <Card
          hasRightIcon={false}
          hasRoundedCorners
          hasBorder
          fullWidth
          thumbnailContent={<CardThumbnail shiftCardStatus="night" />}
          color={CardColors.secondary}
          extraFooterContent={<ExtraCardContent />}
        ></Card>
        <Spacing />
        <Card
          hasRightIcon={false}
          hasRoundedCorners
          hasBorder
          fullWidth
          thumbnailContent={<CardThumbnail shiftCardStatus="night" />}
          color={CardColors.secondary}
          extraFooterContent={<ExtraCardContent isDarkBg />}
          extraFooterStyle={{
            backgroundColor: ColorPrimaryGravitas,
            borderColor: ColorPrimaryGravitas,
          }}
        ></Card>
        <Spacing />
      </Container>
    </ScrollView>
  );
};

const Template: Story<CardProps> = ({ fullWidth, ...rest }) => (
  <Container>
    <Card
      thumbnailContent={<CardThumbnail shiftCardStatus="sleeper" />}
      fullWidth={fullWidth}
      {...rest}
    >
      <CardContent style={{ flex: fullWidth ? 1 : undefined }} />
    </Card>
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = { hasBorder: true, hasRightIcon: true, fullWidth: true };
