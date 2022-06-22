import { Meta, Story } from '@storybook/react';
import { Calendar, CalendarProps } from '@newcross-ui/react-native';
import Container from '../Container';
import { isWebPlatform } from '../utils';
import { getParameters } from '../utils';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './CalendarInfo';

export default {
  title: 'ReactNative/Components/Calendar',
  component: Calendar,
  parameters: getParameters(),
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container
        hasPadding={false}
        containerStyle={{ maxWidth: isWebPlatform ? '350px' : undefined }}
      >
        <Calendar />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container
      containerStyle={{ maxWidth: isWebPlatform ? '350px' : undefined }}
    >
      <Calendar />
    </Container>
  );
};

const Template: Story<CalendarProps> = ({ ...rest }) => {
  return (
    <Container
      containerStyle={{ maxWidth: isWebPlatform ? '350px' : undefined }}
    >
      <Calendar {...rest} />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {};
