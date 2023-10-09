import React from 'react';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, Story } from '@storybook/react';
import styled, { css } from 'styled-components';
import Card from '../../components/Card';
import CardGroup, { CardGroupProps } from '../../components/CardGroup';
import Typography from '../../components/Typography';
import { Theme } from '../../types';
import { CardShift } from '../Card/CardShift';
import Container from '../Container';
import Spacing from '../Spacing';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/CardGroup',
  component: CardGroup,
} as Meta;

const StyledText = styled(Typography)`
  ${({ theme }: Theme) => css`
    margin: 0 ${theme.SpacingBase12};
  `};
`;

export const Variants = () => {
  return (
    <Container direction="column" hasPadding={false}>
      <StoryTitle.Regular>CardGroup</StoryTitle.Regular>
      <Spacing />
      <CardGroup>
        <Card>
          <FontAwesomeIcon icon={faUser} size={'lg'} />
          <StyledText variant={'heading6'}>My card</StyledText>
        </Card>
        <Card>
          <FontAwesomeIcon icon={faUser} size={'lg'} />
          <StyledText variant={'heading6'}>My card</StyledText>
        </Card>
        <Card>
          <FontAwesomeIcon icon={faUser} size={'lg'} />
          <StyledText variant={'heading6'}>My card</StyledText>
        </Card>
      </CardGroup>
      <Spacing size={'Large'} />
      <StoryTitle.Regular>FullWidth CardGroup</StoryTitle.Regular>
      <Spacing />
      <CardGroup fullWidth>
        <Card hasRightIcon>
          <Container hasPadding={false}>
            <FontAwesomeIcon icon={faUser} size={'lg'} />
            <StyledText variant={'heading6'}>My card</StyledText>
          </Container>
        </Card>
        <Card hasRightIcon>
          <Container hasPadding={false}>
            <FontAwesomeIcon icon={faUser} size={'lg'} />
            <StyledText variant={'heading6'}>My card</StyledText>
          </Container>
        </Card>
        <Card hasRightIcon>
          <Container hasPadding={false}>
            <FontAwesomeIcon icon={faUser} size={'lg'} />
            <StyledText variant={'heading6'}>My card</StyledText>
          </Container>
        </Card>
      </CardGroup>
      <Spacing size={'Large'} />
      <StoryTitle.Regular>Day shift cards Group</StoryTitle.Regular>
      <Spacing />
      <CardGroup>
        <CardShift shiftCardStatus={'DAY'} />
        <CardShift shiftCardStatus={'DAY'} />
        <CardShift shiftCardStatus={'DAY'} />
      </CardGroup>
    </Container>
  );
};

const Template: Story<CardGroupProps> = ({ ...rest }) => {
  return (
    <Container>
      <CardGroup {...rest}>
        <Card>
          <FontAwesomeIcon icon={faUser} size={'lg'} />
          <StyledText variant={'heading6'}>My card</StyledText>
        </Card>
        <Card>
          <FontAwesomeIcon icon={faUser} size={'lg'} />
          <StyledText variant={'heading6'}>My card</StyledText>
        </Card>
        <Card>
          <FontAwesomeIcon icon={faUser} size={'lg'} />
          <StyledText variant={'heading6'}>My card</StyledText>
        </Card>
      </CardGroup>
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  fullWidth: true,
};
