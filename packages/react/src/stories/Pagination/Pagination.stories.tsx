import React from 'react';
import { Meta, Story } from '@storybook/react';
import Container from '../../components/Container';
import Pagination, { PaginationProps } from '../../components/Pagination';
import Card from '../../components/Card';
import * as StoryTitle from '../StoryTitle';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './PaginationInfo';
import styled from 'styled-components';

export default {
  title: 'React/Components/Pagination',
  component: Pagination,
} as Meta;

const StyledCard = styled(Card)`
  max-width: 700px;
  > div {
    width: 100%;
  }
`;

const Template: Story<PaginationProps> = (props) => {
  return (
    <Container display="block">
      <StyledCard fullWidth>
        <Pagination {...props} />
      </StyledCard>
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
      <Container flexDirection="column">
        <Pagination count={20} />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>
        Pagination with 12 elements - aligned to the start
      </StoryTitle.Regular>
      <StyledCard fullWidth>
        <Pagination count={12} />
      </StyledCard>
      <Container m="SpacingBase16" />
      <StoryTitle.Regular>
        Pagination with 12 elements - full width
      </StoryTitle.Regular>
      <StyledCard fullWidth>
        <Pagination count={12} fullWidth selectedValue={12} />
      </StyledCard>
      <Container m="SpacingBase16" />
      <StoryTitle.Regular>
        Pagination with 55 elements - full width
      </StoryTitle.Regular>
      <StyledCard fullWidth>
        <Pagination count={55} selectedValue={23} fullWidth />
      </StyledCard>
    </Container>
  );
};

export const Interactive = Template.bind({});
