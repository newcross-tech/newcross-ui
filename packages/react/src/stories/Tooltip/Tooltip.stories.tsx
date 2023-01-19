import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import Tooltip, { TooltipProps } from '../../components/Tooltip';
import Typography from '../../components/Typography';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Spacing from '../Spacing';
import { DESCRIPTION, DO, DONT, TITLE } from './Tooltip.info';

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
    <Container display={'block'} direction="column">
      <Typography variant={'heading4'}>Default Tooltip</Typography>
      <Spacing size={'Large'} />
      <Tooltip position="right">
        This is an info message. This is an info message. This is an info
        message.
      </Tooltip>
      <Spacing size={'Large'} />
      <Typography variant={'heading4'}>Question Tooltip</Typography>
      <Spacing size={'Large'} />
      <Tooltip variant="question" position="right">
        This is a question message. This is a question message. This is a
        question message.
      </Tooltip>
    </Container>
  );
};

export const VariantsWithPosition = () => {
  return (
    <Container direction="column" display="flex">
      <Typography variant={'heading3'}>Variants with Position</Typography>
      <Spacing size={'Large'} />
      <Container display="inline-flex" justifyContent="space-around">
        <Tooltip position="top">Top</Tooltip>
        <Typography variant={'heading4'}>Top</Typography>

        <Tooltip position="right">Right</Tooltip>
        <Typography variant={'heading4'}>Right</Typography>

        <Tooltip position="bottom">Bottom</Tooltip>
        <Typography variant={'heading4'}>Bottom</Typography>

        <Tooltip position="left">Left</Tooltip>
        <Typography variant={'heading4'}>Left</Typography>
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
    <Typography variant={'heading4'}>Interactive Tooltip</Typography>
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
