import { Meta, Story } from '@storybook/react';
import {
  ProgressBar,
  ProgressBarProps,
  ProgressBarVariant,
  ProgressBarLabelPositions,
  ProgressBarColorVariant,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import { native } from '@newcross-ui/design-tokens';
import Container from '../Container';
import { isWebPlatform } from '../utils';
import Spacing, { SpacingSizes } from '../Spacing';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './ProgressBarInfo';

const { ColorBaseBlue100 } = native.healthforce;

export default {
  title: 'ReactNative/Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container>
        <Typography variant={TypographyVariant.heading4}>
          Determinate Progress Bar
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <ProgressBar
          label={'Label'}
          labelPosition={ProgressBarLabelPositions.topLeft}
          progressLabelPosition={ProgressBarLabelPositions.topRight}
          progress={50}
        />
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Indeterminate Progress Bar
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <ProgressBar
          label={'Label'}
          variant={ProgressBarVariant.indeterminate}
        />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container containerStyle={{ width: isWebPlatform ? '35%' : '100%' }}>
      <Typography variant={TypographyVariant.heading4}>
        Determinate Progress Bar
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <ProgressBar
        label={'Label'}
        labelPosition={ProgressBarLabelPositions.topLeft}
        progressLabelPosition={ProgressBarLabelPositions.topRight}
        progress={0}
      />
      <Spacing size={SpacingSizes.Large} />

      <Typography variant={TypographyVariant.heading4}>
        Determinate Centered Positioned Label Progress Bar
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <ProgressBar
        label={'Label'}
        labelPosition={ProgressBarLabelPositions.topCenter}
        progressLabelPosition={ProgressBarLabelPositions.bottomCenter}
        progress={25}
      />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Determinate Two Line Label Progress Bar
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <ProgressBar
        label={
          'This label flows onto 2 lines This label flows onto 2 lines This label flows onto 2 lines This label flows onto 2 lines'
        }
        labelPosition={ProgressBarLabelPositions.topLeft}
        progressLabelPosition={ProgressBarLabelPositions.topRight}
        progress={50}
      />
      <Spacing size={SpacingSizes.Large} />

      <Typography variant={TypographyVariant.heading4}>
        Determinate Dark Background Progress Bar
      </Typography>
      <Spacing size={SpacingSizes.Large} />

      <Container
        hasPadding
        containerStyle={{ backgroundColor: ColorBaseBlue100, flex: 0 }}
      >
        <ProgressBar
          colorVariant={ProgressBarColorVariant.secondary}
          label={'Label'}
          labelPosition={ProgressBarLabelPositions.topLeft}
          progressLabelPosition={ProgressBarLabelPositions.topRight}
          progress={100}
        />
      </Container>

      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Indeterminate Progress Bar
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <ProgressBar label={'Label'} variant={ProgressBarVariant.indeterminate} />
    </Container>
  );
};

const Template: Story<ProgressBarProps> = ({ ...rest }) => {
  return (
    <Container containerStyle={{ width: isWebPlatform ? '35%' : '100%' }}>
      <ProgressBar {...rest} />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  label: 'Label',
};
