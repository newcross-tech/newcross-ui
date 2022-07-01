import { Meta, Story } from '@storybook/react';
import {
  Avatar,
  AvatarProps,
  AvatarSizes,
  Typography,
  TypographyVariant,
  Badge,
  BadgeSizes,
  BadgePositions,
} from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing, { SpacingPositions } from '../Spacing';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './AvatarInfo';

export default {
  title: 'ReactNative/Components/Avatar',
  component: Avatar,
} as Meta;

const BottomSpacing = () => <Spacing position={SpacingPositions.Bottom} />;

const person =
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80';

const HorizontalSpacing = () => (
  <Spacing position={SpacingPositions.Horizontal} />
);

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container direction="row">
        <Avatar />
        <HorizontalSpacing />
        <Avatar source={{ uri: person }} />
        <HorizontalSpacing />
        <Avatar name="John Doe" />
      </Container>
    </InfoTemplate>
  );
};

export const VariantWithImage = () => {
  return (
    <Container>
      <Typography variant={TypographyVariant.heading7}>
        Active Variant
      </Typography>
      <BottomSpacing />
      <Avatar source={{ uri: person }} />
      <BottomSpacing />
      <Typography variant={TypographyVariant.heading7}>
        Inactive Variant
      </Typography>
      <BottomSpacing />
      <Avatar inactive source={{ uri: person }} />
    </Container>
  );
};

export const VariantWithText = () => {
  return (
    <Container>
      <Typography variant={TypographyVariant.heading7}>
        Active Variant
      </Typography>
      <BottomSpacing />
      <Avatar name="John Doe" />
      <BottomSpacing />
      <Typography variant={TypographyVariant.heading7}>
        Inactive Variant
      </Typography>
      <BottomSpacing />
      <Avatar inactive name="John Doe" />
    </Container>
  );
};

export const VariantWithIcon = () => {
  return (
    <Container>
      <Typography variant={TypographyVariant.heading7}>
        Active Variant
      </Typography>
      <BottomSpacing />
      <Avatar />
      <BottomSpacing />
      <Typography variant={TypographyVariant.heading7}>
        Inactive Variant
      </Typography>
      <BottomSpacing />
      <Avatar inactive />
      <BottomSpacing />
      <Typography variant={TypographyVariant.heading7}>
        Size Variants
      </Typography>
      <BottomSpacing />
      <Container direction="row">
        <Container containerStyle={{ alignItems: 'center' }}>
          <Typography variant={TypographyVariant.paragraph1}>Large</Typography>
          <BottomSpacing />
          <Avatar size={AvatarSizes.large} />
        </Container>
        <HorizontalSpacing />
        <Container containerStyle={{ alignItems: 'center' }}>
          <Typography variant={TypographyVariant.paragraph1}>Medium</Typography>
          <BottomSpacing />
          <Avatar size={AvatarSizes.medium} />
        </Container>
        <HorizontalSpacing />
        <Container containerStyle={{ alignItems: 'center' }}>
          <Typography variant={TypographyVariant.paragraph1}>Small</Typography>
          <BottomSpacing />
          <Avatar size={AvatarSizes.small} />
        </Container>
      </Container>
    </Container>
  );
};

export const VariantWithBadge = () => {
  return (
    <Container>
      <Typography variant={TypographyVariant.heading7}>
        Variant with Badge
      </Typography>
      <BottomSpacing />
      <Badge size={BadgeSizes.medium} position={BadgePositions.TopRight}>
        <Avatar />
      </Badge>
    </Container>
  );
};

const Template: Story<AvatarProps> = (props) => (
  <Container>
    <Avatar {...props} />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {};
