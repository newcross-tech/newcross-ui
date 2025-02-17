import { Meta, Story } from '@storybook/react';
import Container, { ContainerProps } from '../../components/Container';
import TextInput from '../../components/Fields/TextInput';
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

export const Overview = () => (
  <InfoTemplate
    title={TITLE}
    description={DESCRIPTION}
    doInfo={DO}
    dontInfo={DONT}
  />
);

export const Variants = () => (
  <Container flexDirection="column" gap="lg">
    <StoryTitle.Overview>Container with margin</StoryTitle.Overview>
    <StyledContainer m="sm">Lorem ipsum</StyledContainer>

    <StoryTitle.Overview>Container with padding</StoryTitle.Overview>
    <StyledContainer p="md">Lorem ipsum</StyledContainer>

    <StoryTitle.Overview>
      Flexbox container with gap and padding
    </StoryTitle.Overview>
    <StyledContainer flexDirection="column" gap="lg" p="lg">
      <TextInput label="Field A" />
      <TextInput label="Field B" />
      <TextInput label="Field C" />
    </StyledContainer>
  </Container>
);

const Template = ({ children, ...rest }: ContainerProps) => (
  <StyledContainer {...rest}>{children}</StyledContainer>
);

export const Interactive: Story<ContainerProps> = Template.bind({});

Interactive.args = {
  children: (
    <>
      {[...new Array(4)].map((_, i) => (
        <Card hasBorder key={i}>
          <Typography variant="paragraph1">Card {i + 1}</Typography>
        </Card>
      ))}
    </>
  ),
  flexDirection: 'row',
  gap: 'lg',
  m: 'md',
};
