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
import { native } from '@newcross-ui/design-tokens';
import Container from '../Container';
import Spacing from '../Spacing';
import CardContent from './CardContent';
import CardThumbnail from './CardThumbnail';
import { getParameters } from '../utils';

const {
  ColorBaseBlue100,
  ColorBaseOrange100,
  ColorBaseYellow100,
  ColorBaseYellow400,
  SpacingBase24,
  SpacingBase12,
} = native.healthforce;

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
      thumbnailContent={
        <CardThumbnail colors={[ColorBaseBlue100, ColorBaseOrange100]} />
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
        <CardThumbnail colors={[ColorBaseBlue100, ColorBaseOrange100]} />
      }
    >
      <CardContent />
    </Card>
    <Spacing />
    <Card
      hasRightIcon
      hasBorder
      thumbnailContent={
        <CardThumbnail colors={[ColorBaseBlue100, ColorBaseOrange100]} />
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
        <CardThumbnail colors={[ColorBaseYellow100, ColorBaseYellow400]} />
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
        <CardThumbnail colors={[ColorBaseBlue100, ColorBaseOrange100]} />
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
