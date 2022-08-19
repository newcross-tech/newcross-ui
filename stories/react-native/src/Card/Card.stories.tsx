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
} from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing from '../Spacing';
import { healthforce } from '@newcross-ui/design-tokens';
import CardContent from './CardContent';
import CardThumbnail from './CardThumbnail';
import { getParameters } from '../utils';

const {
  ColorBaseGravitas,
  ColorBaseHeritage,
  ColorBaseYellow400,
  ColorBaseYellow300,
  SpacingBase24,
  SpacingBase12,
} = healthforce;

export default {
  title: 'ReactNative/Components/Card',
  component: Card,
  parameters: getParameters(),
} as Meta;

export const Variants: Story<CardProps> = () => (
  <Container>
    <Card hasRoundedCorners>
      <FontAwesomeIcon icon={faUser} size={SpacingBase24} />
      <Typography
        variant={TypographyVariant.heading6}
        style={{ marginLeft: SpacingBase12, marginRight: SpacingBase12 }}
      >
        My Profile
      </Typography>
      <Badge badgeContent={7} />
    </Card>
    <Spacing />
    <Card
      hasRoundedCorners
      thumbnailContent={
        <CardThumbnail colors={[ColorBaseGravitas, ColorBaseHeritage]} />
      }
    >
      <CardContent />
    </Card>
    <Spacing />
    <Card
      hasRightIcon
      hasBorder
      hasRoundedCorners
      thumbnailContent={
        <CardThumbnail colors={[ColorBaseGravitas, ColorBaseHeritage]} />
      }
    >
      <CardContent />
    </Card>
    <Spacing />
    <Card
      hasRightIcon
      hasBorder
      thumbnailContent={
        <CardThumbnail colors={[ColorBaseGravitas, ColorBaseHeritage]} />
      }
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
      thumbnailContent={
        <CardThumbnail colors={[ColorBaseYellow400, ColorBaseYellow300]} />
      }
    >
      <CardContent style={{ flex: 1 }} />
    </Card>
  </Container>
);

const Template: Story<CardProps> = ({ fullWidth, ...rest }) => (
  <Container>
    <Card
      thumbnailContent={
        <CardThumbnail colors={[ColorBaseGravitas, ColorBaseHeritage]} />
      }
      fullWidth={fullWidth}
      {...rest}
    >
      <CardContent style={{ flex: fullWidth ? 1 : undefined }} />
    </Card>
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = { hasBorder: true, hasRightIcon: true, fullWidth: true };
