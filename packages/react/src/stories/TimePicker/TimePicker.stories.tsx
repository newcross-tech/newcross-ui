import { Meta, Story } from '@storybook/react';
import { DESCRIPTION, DO, DONT, TITLE } from './TimePicker.info';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import TimePicker, {
  TimePickerProps,
} from '../../components/Fields/TimePicker';

export default {
  title: 'React/Components/TimePicker',
  component: TimePicker,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <TimePicker
        baseDate={new Date()}
        label="TimePicker"
        startTime="08:00"
        helperText="this TimePicker starts from 08:00"
      />
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container flexDirection="column" gap="SpacingBase8">
      <TimePicker
        baseDate={new Date()}
        label="Default TimePicker"
        placeholder="Select an option..."
      />
      <TimePicker
        baseDate={new Date()}
        label="Disabled Select"
        placeholder="Disabled TimePicker"
        disabled
      />
      <TimePicker
        baseDate={new Date()}
        label="Error Select"
        hasError
        placeholder="Error TimePicker"
        errorText="Please make a selection"
      />
    </Container>
  );
};

const Template: Story<TimePickerProps<{ value: string; label: string }>> = ({
  ...rest
}) => (
  <Container>
    <TimePicker {...rest} />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  baseDate: new Date(),
  label: 'TimePicker',
  startTime: '08:00',
  placeholder: 'Select a time...',
};
