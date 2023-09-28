import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import ProgressBar, { ProgressBarProps } from '../../components/ProgressBar';
import BasicContainer from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Spacing from '../Spacing';
import { DESCRIPTION, DO, DONT, TITLE } from './ProgressBarInfo';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
} as Meta;

const Container = styled(BasicContainer)`
  width: 35%;
`;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container direction="column" hasPadding={false}>
        <StoryTitle.Overview>Determinate Progress Bar</StoryTitle.Overview>
        <Spacing size={'Large'} />
        <ProgressBar
          label={'Label'}
          labelPosition={'topLeft'}
          progressLabelPosition={'topRight'}
          progress={50}
        />
        <Spacing size={'Large'} />
        <StoryTitle.Overview>Indeterminate Progress Bar</StoryTitle.Overview>
        <Spacing size={'Large'} />
        <ProgressBar label={'Label'} variant={'indeterminate'} />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container direction="column">
      <StoryTitle.Regular>Determinate Progress Bar</StoryTitle.Regular>
      <Spacing size={'Large'} />
      <ProgressBar
        label={'Label'}
        labelPosition={'topLeft'}
        progressLabelPosition={'topRight'}
        progress={0}
      />
      <Spacing size={'Large'} />

      <StoryTitle.Regular>
        Determinate Centered Positioned Label Progress Bar
      </StoryTitle.Regular>
      <Spacing size={'Large'} />
      <ProgressBar
        label={'Label'}
        labelPosition={'topCenter'}
        progressLabelPosition={'bottomCenter'}
        progress={25}
      />
      <Spacing size={'Large'} />
      <StoryTitle.Regular>
        Determinate Two Line Label Progress Bar
      </StoryTitle.Regular>
      <Spacing size={'Large'} />
      <ProgressBar
        label={
          'This label flows onto 2 lines This label flows onto 2 lines This label flows onto 2 lines This label flows onto 2 lines'
        }
        labelPosition={'topLeft'}
        progressLabelPosition={'topRight'}
        progress={50}
      />
      <Spacing size={'Large'} />

      <StoryTitle.Regular>Indeterminate Progress Bar</StoryTitle.Regular>
      <Spacing size={'Large'} />
      <ProgressBar label={'Label'} variant={'indeterminate'} />
    </Container>
  );
};

const Template: Story<ProgressBarProps> = ({ ...rest }) => {
  return (
    <Container direction="column">
      <StoryTitle.Regular>Interactive Progress Bar</StoryTitle.Regular>
      <Spacing size={'Large'} />
      <ProgressBar {...rest} />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  label:
    'This is an interactive label that will be wrapped This is an interactive label that will be wrapped This is an interactive label that will be wrapped',
};
