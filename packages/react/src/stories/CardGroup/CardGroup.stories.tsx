import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, Story } from '@storybook/react';
import styled, { css } from 'styled-components';
import Card from '../../components/Card';
import CardGroup, { CardGroupProps } from '../../components/CardGroup';
import Typography from '../../components/Typography';
import { Theme } from '../../types';
import { CardShift } from '../Card/CardShift';
import Container from '../../components/Container';
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
    <Container flexDirection="column">
      <StoryTitle.Regular>CardGroup</StoryTitle.Regular>
      <Container m="SpacingBase4" />
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
      <Container m="SpacingBase8" />
      <StoryTitle.Regular>FullWidth CardGroup</StoryTitle.Regular>
      <Container m="SpacingBase8" />
      <CardGroup fullWidth>
        <Card hasRightIcon>
          <Container>
            <FontAwesomeIcon icon={faUser} size={'lg'} />
            <StyledText variant={'heading6'}>My card</StyledText>
          </Container>
        </Card>
        <Card hasRightIcon>
          <Container>
            <FontAwesomeIcon icon={faUser} size={'lg'} />
            <StyledText variant={'heading6'}>My card</StyledText>
          </Container>
        </Card>
        <Card hasRightIcon>
          <Container>
            <FontAwesomeIcon icon={faUser} size={'lg'} />
            <StyledText variant={'heading6'}>My card</StyledText>
          </Container>
        </Card>
      </CardGroup>
      <Container m="SpacingBase8" />
      <StoryTitle.Regular>Day shift cards Group</StoryTitle.Regular>
      <Container m="SpacingBase8" />
      <CardGroup>
        <Container pb="SpacingBase8">
          <CardShift shiftCardStatus={'DAY'} />
        </Container>
        <Container pb="SpacingBase8">
          <CardShift shiftCardStatus={'DAY'} />
        </Container>

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
