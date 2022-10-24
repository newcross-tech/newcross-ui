import { Meta, Story } from '@storybook/react';
import Avatar, { AvatarProps, AvatarSizes } from '../../components/Avatar';
import Typography, { TypographyVariant } from '../../components/Typography';
import Container from '../Container';
import Spacing, { SpacingPositions } from '../Spacing';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './AvatarInfo';

export default {
  title: 'React/Components/Avatar',
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
        <Avatar source={person} />
        <HorizontalSpacing />
        <Avatar name="John Doe" />
      </Container>
    </InfoTemplate>
  );
};

export const VariantWithImage = () => {
  return (
    <Container direction="column">
      <Typography variant={TypographyVariant.heading4}>
        Active Variant
      </Typography>
      <BottomSpacing />
      <Avatar source={person} />
      <BottomSpacing />
      <Typography variant={TypographyVariant.heading4}>
        Inactive Variant
      </Typography>
      <BottomSpacing />
      <Avatar inactive source={person} />
    </Container>
  );
};

export const VariantWithText = () => {
  return (
    <Container direction="column">
      <Typography variant={TypographyVariant.heading4}>
        Active Variant
      </Typography>
      <BottomSpacing />
      <Avatar name="John Doe" />
      <BottomSpacing />
      <Typography variant={TypographyVariant.heading4}>
        Inactive Variant
      </Typography>
      <BottomSpacing />
      <Avatar inactive name="John Doe" />
    </Container>
  );
};

export const VariantWithIcon = () => {
  return (
    <Container direction="column">
      <Typography variant={TypographyVariant.heading4}>
        Active Variant
      </Typography>
      <BottomSpacing />
      <Avatar />
      <BottomSpacing />
      <Typography variant={TypographyVariant.heading4}>
        Inactive Variant
      </Typography>
      <BottomSpacing />
      <Avatar inactive />
      <BottomSpacing />
      <Typography variant={TypographyVariant.heading4}>
        Size Variants
      </Typography>
      <BottomSpacing />

      <Container direction="row">
        <Container direction="column">
          <Typography variant={TypographyVariant.paragraph2}>Large</Typography>
          <BottomSpacing />
          <Avatar size={AvatarSizes.large} />
        </Container>
        <HorizontalSpacing />
        <Container direction="column">
          <Typography variant={TypographyVariant.paragraph2}>Medium</Typography>
          <BottomSpacing />
          <Avatar size={AvatarSizes.medium} />
        </Container>
        <HorizontalSpacing />
        <Container direction="column">
          <Typography variant={TypographyVariant.paragraph2}>Small</Typography>
          <BottomSpacing />
          <Avatar size={AvatarSizes.small} />
        </Container>
      </Container>
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
