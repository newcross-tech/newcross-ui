import { Meta, Story } from '@storybook/react';
import Avatar, { AvatarProps } from '../../components/Avatar';
import Badge, { BadgeSizes } from '../../components/Badge';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './AvatarInfo';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/Avatar',
  component: Avatar,
} as Meta;

interface VariantsComponentProps extends AvatarProps {
  badgeSize: BadgeSizes;
}

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
        <Avatar source={person} />
        <HorizontalSpacing />
        <Avatar />
        <HorizontalSpacing />
        <Avatar name="John Doe" />
      </Container>
    </InfoTemplate>
  );
};

const variantProps: Array<AvatarProps> = [
  { source: person },
  {},
  { name: 'John Doe' },
];

const VariantsComponent = ({ badgeSize, ...props }: VariantsComponentProps) => {
  return (
    <>
      <BottomSpacing />
      <Container>
        {variantProps.map((variant) => (
          <>
            <Avatar {...props} {...variant} />
            <HorizontalSpacing />
          </>
        ))}
        <Badge size={badgeSize} position="topRight" hasCutout>
          <Avatar {...props} />
        </Badge>
        <HorizontalSpacing />
      </Container>
      <BottomSpacing />
    </>
  );
};

export const Variants = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Default</StoryTitle.Regular>
      <VariantsComponent clickable badgeSize="small" />
      <BottomSpacing />

      <StoryTitle.Regular>Selected</StoryTitle.Regular>
      <VariantsComponent selected clickable badgeSize="medium" />
      <BottomSpacing />

      <StoryTitle.Regular>Disabled with Hover</StoryTitle.Regular>
      <VariantsComponent
        inactive
        allowHoverOnDisabled
        clickable
        badgeSize="large"
      />
      <BottomSpacing />

      <StoryTitle.Regular>Disabled without Hover</StoryTitle.Regular>
      <VariantsComponent inactive badgeSize="medium" />
      <BottomSpacing />
    </Container>
  );
};

export const Sizes = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Small (40px)</StoryTitle.Regular>
      <VariantsComponent size={40} badgeSize="small" />
      <BottomSpacing />

      <StoryTitle.Regular>Medium (60px)</StoryTitle.Regular>
      <VariantsComponent size={60} badgeSize="medium" />
      <BottomSpacing />

      <StoryTitle.Regular>Large (80px)</StoryTitle.Regular>
      <VariantsComponent size={80} badgeSize="large" />
      <BottomSpacing />
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
