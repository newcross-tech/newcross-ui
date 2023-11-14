import React from 'react';
import { Meta, Story } from '@storybook/react';
import Avatar, { AvatarProps } from '../../components/Avatar';
import Badge from '../../components/Badge';
import Typography from '../../components/Typography';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './AvatarInfo';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/Avatar',
  component: Avatar,
} as Meta;

const BottomSpacing = () => <Container mb="SpacingBase12" />;

const person =
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80';

const HorizontalSpacing = () => <Container mx="SpacingBase12" />;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container>
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
    <Container flexDirection="column">
      <StoryTitle.Regular>Active Variant</StoryTitle.Regular>
      <Avatar source={person} />
      <BottomSpacing />
      <StoryTitle.Regular>Inactive Variant</StoryTitle.Regular>
      <Avatar inactive source={person} />
    </Container>
  );
};

export const VariantWithText = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Active Variant</StoryTitle.Regular>

      <Avatar name="John Doe" />
      <BottomSpacing />
      <StoryTitle.Regular>Inactive Variant</StoryTitle.Regular>

      <Avatar inactive name="John Doe" />
    </Container>
  );
};
export const VariantWithBadge = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Variant with Badge</StoryTitle.Regular>

      <Container flexDirection="row">
        <Badge size="medium" position="topRight">
          <Avatar size={64} />
        </Badge>
      </Container>
    </Container>
  );
};

export const VariantWithIcon = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Active Variant</StoryTitle.Regular>
      <Avatar />
      <BottomSpacing />
      <StoryTitle.Regular>Inactive Variant</StoryTitle.Regular>
      <Avatar inactive />
      <BottomSpacing /> <BottomSpacing />
      <StoryTitle.Regular>Size Variants</StoryTitle.Regular>
      <Container flexDirection="row">
        <Container flexDirection="column">
          <Typography variant={'paragraph2'}>48px</Typography>
          <Avatar size={48} />
        </Container>
        <HorizontalSpacing />

        <Container flexDirection="column">
          <Typography variant={'paragraph2'}>64px</Typography>
          <Avatar />
        </Container>
        <HorizontalSpacing />

        <Container flexDirection="column">
          <Typography variant={'paragraph2'}>144px</Typography>
          <Avatar size={144} />
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
Interactive.args = { size: 64 };
