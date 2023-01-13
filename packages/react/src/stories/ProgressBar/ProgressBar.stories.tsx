import { Typography } from '@newcross-ui/react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import ProgressBar, { ProgressBarProps } from '../../components/ProgressBar';
import BasicContainer from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Spacing from '../Spacing';
import { DESCRIPTION, DO, DONT, TITLE } from './ProgressBarInfo';

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
        <Typography variant={'heading4'}>Determinate Progress Bar</Typography>
        <Spacing size={'Large'} />
        <ProgressBar
          label={'Label'}
          labelPosition={'topLeft'}
          progressLabelPosition={'topRight'}
          progress={50}
        />
        <Spacing size={'Large'} />
        <Typography variant={'heading4'}>Indeterminate Progress Bar</Typography>
        <Spacing size={'Large'} />
        <ProgressBar label={'Label'} variant={'indeterminate'} />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container direction="column">
      <Typography variant={'heading4'}>Determinate Progress Bar</Typography>
      <Spacing size={'Large'} />
      <ProgressBar
        label={'Label'}
        labelPosition={'topLeft'}
        progressLabelPosition={'topRight'}
        progress={0}
      />
      <Spacing size={'Large'} />

      <Typography variant={'heading4'}>
        Determinate Centered Positioned Label Progress Bar
      </Typography>
      <Spacing size={'Large'} />
      <ProgressBar
        label={'Label'}
        labelPosition={'topCenter'}
        progressLabelPosition={'bottomCenter'}
        progress={25}
      />
      <Spacing size={'Large'} />
      <Typography variant={'heading4'}>
        Determinate Two Line Label Progress Bar
      </Typography>
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

      <Typography variant={'heading4'}>Indeterminate Progress Bar</Typography>
      <Spacing size={'Large'} />
      <ProgressBar label={'Label'} variant={'indeterminate'} />
    </Container>
  );
};

const Template: Story<ProgressBarProps> = ({ ...rest }) => {
  return (
    <Container direction="column">
      <Typography variant={'heading4'}>Interactive Progress Bar</Typography>
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
