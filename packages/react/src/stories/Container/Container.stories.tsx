import React from 'react';
import { Meta, Story } from '@storybook/react';
import Container, { ContainerProps } from '../../components/Container';
import TextInput from '../../components/TextInput';
import { DESCRIPTION, DO, DONT, TITLE } from './ContainerInfo';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Card from '../../components/Card';
import Typography from '../../components/Typography';
import * as StoryTitle from '../StoryTitle';
import styled from 'styled-components';
import { Theme } from '../../types';

const StyledContainer = styled(Container)`
  ${({ theme }: Theme) => `
    background-color: ${theme.ColorNeutralWhite}
  `}
`;

export default {
  title: 'React/Components/Container',
  component: Container,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    />
  );
};

export const Variants = () => {
  return (
    <Container flexDirection="column" gap="SpacingBase32">
      <StoryTitle.Overview>Container with margin</StoryTitle.Overview>
      <StyledContainer m="SpacingBase12">Lorem ipsum</StyledContainer>

      <StoryTitle.Overview>Container with padding</StoryTitle.Overview>
      <StyledContainer p="SpacingBase12">Lorem ipsum</StyledContainer>

      <StoryTitle.Overview>
        Flexbox container with gap and padding
      </StoryTitle.Overview>
      <StyledContainer
        flexDirection="column"
        gap="SpacingBase12"
        p="SpacingBase12"
      >
        <TextInput label="Field A" />
        <TextInput label="Field B" />
        <TextInput label="Field C" />
      </StyledContainer>
    </Container>
  );
};

const Template = ({ children, ...rest }: ContainerProps) => (
  <StyledContainer {...rest}>{children}</StyledContainer>
);

export const Interactive: Story<ContainerProps> = Template.bind({});

Interactive.args = {
  children: (
    <>
      {[...new Array(4)].map((_, i) => (
        <Card hasBorder>
          <Typography variant="paragraph1" key={i}>
            Card {i + 1}
          </Typography>
        </Card>
      ))}
    </>
  ),
};
