import { Meta, Story } from '@storybook/react';
import Avatar, { AvatarProps, AvatarSizes } from '../../components/Avatar';
import Typography, { TypographyVariant } from '../../components/Typography';
import Badge, { BadgeSizes, BadgePositions } from '../../components/Badge';
import Container from '../Container';
import Spacing, { SpacingPositions } from '../Spacing';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './AvatarInfo';
import React from 'react';

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
      <Avatar source={person} />
      <BottomSpacing />
      <Typography variant={TypographyVariant.heading4}>
        Inactive Variant
      </Typography>
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

      <Avatar name="John Doe" />
      <BottomSpacing />
      <Typography variant={TypographyVariant.heading4}>
        Inactive Variant
      </Typography>

      <Avatar inactive name="John Doe" />
    </Container>
  );
};
export const VariantWithBadge = () => {
  return (
    <Container direction="column">
      <Typography variant={TypographyVariant.heading4}>
        Variant with Badge
      </Typography>

      <Container direction="row">
        <Badge size={BadgeSizes.medium} position={BadgePositions.TopRight}>
          <Avatar />
        </Badge>
      </Container>
    </Container>
  );
};

export const VariantWithIcon = () => {
  return (
    <Container direction="column">
      <Typography variant={TypographyVariant.heading4}>
        Active Variant
      </Typography>

      <Avatar />
      <BottomSpacing />
      <Typography variant={TypographyVariant.heading4}>
        Inactive Variant
      </Typography>

      <Avatar inactive />
      <BottomSpacing />
      <Typography variant={TypographyVariant.heading4}>
        Size Variants
      </Typography>

      <Container direction="row">
        <Container direction="column">
          <Typography variant={TypographyVariant.paragraph2}>Large</Typography>
          <Avatar size={AvatarSizes.large} />
        </Container>

        <Container direction="column">
          <Typography variant={TypographyVariant.paragraph2}>Medium</Typography>
          <Avatar size={AvatarSizes.medium} />
        </Container>

        <Container direction="column">
          <Typography variant={TypographyVariant.paragraph2}>Small</Typography>
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
