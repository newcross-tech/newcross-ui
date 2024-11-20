import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import Tooltip, { TooltipProps } from '../../components/Tooltip';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './Tooltip.info';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/Tooltip',
  component: Tooltip,
} as Meta;

const CenteredWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Variants = () => {
  return (
    <Container display="block">
      <StoryTitle.Regular>Default Tooltip</StoryTitle.Regular>
      <Container m="SpacingBase8" />
      <Tooltip position="right">
        This is an info message. This is an info message. This is an info
        message.
      </Tooltip>
      <Container m="SpacingBase8" />
      <StoryTitle.Regular>Question Tooltip</StoryTitle.Regular>
      <Container m="SpacingBase8" />
      <Tooltip variant="question" position="right">
        This is a question message. This is a question message. This is a
        question message.
      </Tooltip>
    </Container>
  );
};

export const VariantsWithPosition = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Variants with Position</StoryTitle.Regular>
      <Container m="SpacingBase8" />
      <Container display="inline-flex" justifyContent="space-around">
        <Tooltip position="top">Top</Tooltip>
        <StoryTitle.Regular>Top</StoryTitle.Regular>

        <Tooltip position="right">Right</Tooltip>
        <StoryTitle.Regular>Right</StoryTitle.Regular>

        <Tooltip position="bottom">Bottom</Tooltip>
        <StoryTitle.Regular>Bottom</StoryTitle.Regular>

        <Tooltip position="left">Left</Tooltip>
        <StoryTitle.Regular>Left</StoryTitle.Regular>
      </Container>
    </Container>
  );
};

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container>
        <Tooltip position="top">My Content</Tooltip>
      </Container>
    </InfoTemplate>
  );
};

const Template: Story<TooltipProps> = (props) => (
  <>
    <StoryTitle.Regular>Interactive Tooltip</StoryTitle.Regular>
    <CenteredWrapper>
      <Tooltip {...props} />
    </CenteredWrapper>
  </>
);

export const Interactive = Template.bind({});
Interactive.args = {
  position: 'right',
  children: <>My Content</>,
};
