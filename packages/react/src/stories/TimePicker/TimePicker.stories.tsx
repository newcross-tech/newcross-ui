import { Meta, Story } from '@storybook/react';
import { DESCRIPTION, DO, DONT, TITLE } from './TimePicker.info';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import TimePicker, {
  TimePickerProps,
} from '../../components/Fields/TimePicker';
import Calendar from '../../components/Fields/Calendar';
import Card from '../../components/Card/';
import { useState } from 'react';
import { format } from 'date-fns';
import Typography from '../../components/Typography';

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
        baseDate={new Date().toISOString()}
        label="TimePicker"
        startTime="08:00"
        helperText="this TimePicker starts from 08:00"
      />
    </InfoTemplate>
  );
};

export const Usage = () => {
  const [startDate, setStartDate] = useState<string | null>();
  const [endDate, setEndDate] = useState<string | null>();

  return (
    <Container flexDirection="column" gap="lg">
      <Container gap="lg">
        <Container flex={1}>
          <Card
            fullWidth
            hasRoundedCorners
            hasShadow={false}
            hasBorder
            variant="tertiary"
          >
            <Calendar
              selected={startDate ? new Date(startDate) : null}
              helperText="this Calendar starts from 2023-01-01"
              onChange={(value: Date | null) =>
                setStartDate(value ? value?.toISOString() : null)
              }
            />
          </Card>
        </Container>
        <Container flex={1}>
          <Card
            fullWidth
            hasRoundedCorners
            hasShadow={false}
            hasBorder
            variant="tertiary"
          >
            <Container flexDirection="column" gap="md" fullWidth>
              <TimePicker
                value={startDate}
                baseDate={startDate}
                isOptionSelected={(option) => option.value === startDate}
                formatOptionLabel={(option) => option.label}
                label="Start Time"
                startTime="00:00"
                placeholder="Select a time..."
                helperText="this TimePicker starts from 08:00"
                onChange={(value) => {
                  setStartDate(value);
                  setEndDate(value);
                }}
              />
              <TimePicker
                baseDate={startDate}
                value={endDate}
                isOptionSelected={(option) => option.value === endDate}
                formatOptionLabel={(option) => option.label}
                startTime={
                  startDate ? format(new Date(startDate), 'HH:mm') : undefined
                }
                label="End Time"
                placeholder="Select a time..."
                onChange={(value) => setEndDate(value)}
              />
            </Container>
          </Card>
        </Container>
      </Container>
      <Card
        fullWidth
        hasRoundedCorners
        hasShadow={false}
        hasBorder
        variant="tertiary"
      >
        <Container flexDirection="row" gap="md" fullWidth>
          <Container flexDirection="column" gap="sm" flex={1}>
            <Typography variant="h3">Start Date: </Typography>
            <Typography variant="p2">
              {startDate ? format(new Date(startDate), 'dd-MM-yyyy') : 'N/A'}
            </Typography>
          </Container>
          <Container flexDirection="column" gap="sm" flex={1}>
            <Typography variant="h3">Start Time: </Typography>
            <Typography variant="p2">
              {startDate
                ? format(new Date(startDate), 'HH:mm')
                : 'No start time selected'}
            </Typography>
          </Container>
          <Container flexDirection="column" gap="sm" flex={1}>
            <Typography variant="h3">End Date: </Typography>
            <Typography variant="p2">
              {endDate ? format(new Date(endDate), 'dd-MM-yyyy') : 'N/A'}
            </Typography>
          </Container>
          <Container flexDirection="column" gap="sm" flex={1}>
            <Typography variant="h3">End Time: </Typography>
            <Typography variant="p2">
              {endDate
                ? format(new Date(endDate), 'HH:mm')
                : 'No end time selected'}
            </Typography>
          </Container>
        </Container>
      </Card>
    </Container>
  );
};

export const Variants = () => {
  return (
    <Container flexDirection="column" gap="SpacingBase8">
      <TimePicker
        baseDate={new Date().toISOString()}
        label="Default TimePicker"
        placeholder="Select an option..."
        onChange={(value) => console.log(value)}
      />
      <TimePicker
        baseDate={new Date().toISOString()}
        label="Disabled Select"
        placeholder="Disabled TimePicker"
        disabled
      />
      <TimePicker
        baseDate={new Date().toISOString()}
        label="Error Select"
        hasError
        placeholder="Error TimePicker"
        errorText="Please make a selection"
      />
    </Container>
  );
};

const Template: Story<TimePickerProps> = ({ ...rest }) => (
  <Container>
    <TimePicker {...rest} />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  baseDate: new Date().toISOString(),
  label: 'TimePicker',
  startTime: '08:00',
  placeholder: 'Select a time...',
};
