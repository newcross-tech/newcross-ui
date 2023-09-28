import { Meta, Story } from '@storybook/react';
import Avatar, { AvatarProps } from '../../components/Avatar';
import Badge from '../../components/Badge';
import Typography from '../../components/Typography';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Spacing from '../Spacing';
import { DESCRIPTION, DO, DONT, TITLE } from './AvatarInfo';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/Avatar',
  component: Avatar,
} as Meta;

const BottomSpacing = () => <Spacing position={'Bottom'} />;

const person =
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80';

const HorizontalSpacing = () => <Spacing position={'Horizontal'} />;

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
    <Container direction="column">
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
    <Container direction="column">
      <StoryTitle.Regular>Variant with Badge</StoryTitle.Regular>

      <Container direction="row">
        <Badge size="medium" position="topRight">
          <Avatar />
        </Badge>
      </Container>
    </Container>
  );
};

export const VariantWithIcon = () => {
  return (
    <Container direction="column">
      <StoryTitle.Regular>Active Variant</StoryTitle.Regular>

      <Avatar />
      <BottomSpacing />
      <StoryTitle.Regular>Inactive Variant</StoryTitle.Regular>

      <Avatar inactive />
      <BottomSpacing />
      <StoryTitle.Regular>Size Variants</StoryTitle.Regular>

      <Container direction="row">
        <Container direction="column">
          <Typography variant={'paragraph2'}>Large</Typography>
          <Avatar size="large" />
        </Container>

        <Container direction="column">
          <Typography variant={'paragraph2'}>Medium</Typography>
          <Avatar size="medium" />
        </Container>

        <Container direction="column">
          <Typography variant={'paragraph2'}>Small</Typography>
          <Avatar size="small" />
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
