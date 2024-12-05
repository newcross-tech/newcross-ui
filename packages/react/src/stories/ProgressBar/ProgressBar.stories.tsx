import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import ProgressBar, { ProgressBarProps } from '../../components/ProgressBar';
import BasicContainer from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
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
      <Container flexDirection="column">
        <StoryTitle.Overview>Determinate Progress Bar</StoryTitle.Overview>
        <Container m="SpacingBase16" />
        <ProgressBar
          label={'Label'}
          labelPosition={'topLeft'}
          progressLabelPosition={'topRight'}
          progress={50}
        />
        <Container m="SpacingBase16" />
        <StoryTitle.Overview>Indeterminate Progress Bar</StoryTitle.Overview>
        <Container m="SpacingBase16" />
        <ProgressBar label={'Label'} variant={'indeterminate'} />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Determinate Progress Bar</StoryTitle.Regular>
      <Container m="SpacingBase16" />
      <ProgressBar
        label={'Label'}
        labelPosition={'topLeft'}
        progressLabelPosition={'topRight'}
        progress={0}
      />
      <Container m="SpacingBase16" />

      <StoryTitle.Regular>
        Determinate Centered Positioned Label Progress Bar
      </StoryTitle.Regular>
      <Container m="SpacingBase16" />
      <ProgressBar
        label={'Label'}
        labelPosition={'topCenter'}
        progressLabelPosition={'bottomCenter'}
        progress={25}
      />
      <Container m="SpacingBase16" />
      <StoryTitle.Regular>
        Determinate Two Line Label Progress Bar
      </StoryTitle.Regular>
      <Container m="SpacingBase24" />
      <ProgressBar
        label={
          'This label flows onto 2 lines This label flows onto 2 lines This label flows onto 2 lines This label flows onto 2 lines'
        }
        labelPosition={'topLeft'}
        progressLabelPosition={'topRight'}
        progress={50}
      />
      <Container m="SpacingBase16" />

      <StoryTitle.Regular>Indeterminate Progress Bar</StoryTitle.Regular>
      <Container m="SpacingBase16" />
      <ProgressBar label={'Label'} variant={'indeterminate'} />
    </Container>
  );
};

const Template: Story<ProgressBarProps> = ({ ...rest }) => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Interactive Progress Bar</StoryTitle.Regular>
      <Container m="SpacingBase24" />
      <ProgressBar {...rest} />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  label:
    'This is an interactive label that will be wrapped This is an interactive label that will be wrapped This is an interactive label that will be wrapped',
};
