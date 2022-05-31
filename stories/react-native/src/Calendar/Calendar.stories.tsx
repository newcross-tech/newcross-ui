import { Meta, Story } from '@storybook/react';
import { Calendar, CalendarProps } from '@newcross-ui/react-native';
import Container from '../Container';
import { isWebPlatform } from '../utils';

export default {
  title: 'ReactNative/Components/Calendar',
  component: Calendar,
} as Meta;

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
