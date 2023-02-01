import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Button,
  Calendar,
  CalendarProps,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Container from '../Container';
import { isWebPlatform } from '../utils';
import { getParameters } from '../utils';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './CalendarInfo';
import Spacing from '../Spacing';

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
  const containerStyle = isWebPlatform
    ? { minWidth: '300px', maxWidth: '350px' }
    : {};

  const startDate = new Date('2023-01-01');

  const [singleSelectedDates, setSingleSelectedDates] = useState<Array<string>>(
    ['2023-01-07']
  );

  const [multipleSelectedDates, setMultipleSelectedDates] = useState<
    Array<string>
  >(['2023-01-07', '2023-01-08']);

  const [initialSingleSelectedRange, setInitialSingleSelectedRange] = useState([
    '2023-01-24',
    '2023-01-27',
  ]);

  const [initialMultipleSelectedRanges, setInitialMultipleSelectedRanges] =
    useState([
      ['2023-01-24', '2023-01-27'],
      ['2023-01-28', '2023-01-30'],
    ]);

  const [noShiftsDates, setNoShiftsDates] = useState([
    '2023-01-15',
    '2023-01-16',
  ]);

  const [bookedDates, setBookedDates] = useState(['2023-01-17', '2023-01-18']);
  const [unavailableDates, setUnavailableDates] = useState([
    '2023-01-19',
    '2023-01-20',
  ]);
  const [inactiveDates, setInactiveDates] = useState([
    '2023-01-21',
    '2023-01-22',
  ]);

  return (
    <ScrollView>
      <Container
        containerStyle={{
          flexDirection: isWebPlatform ? 'row' : 'column',
          flexWrap: isWebPlatform ? 'wrap' : 'nowrap',
        }}
      >
        <Container containerStyle={containerStyle}>
          <Typography variant={TypographyVariant.heading4}>
            Single Date selection
          </Typography>
          <Spacing />
          <Calendar
            startDate={startDate}
            selectedDates={singleSelectedDates}
            noShiftsDates={noShiftsDates}
            bookedDates={bookedDates}
            unavailableDates={unavailableDates}
            inactiveDates={inactiveDates}
            onDateSelection={(dates) => setSingleSelectedDates(dates)}
          />
        </Container>
        <Container containerStyle={containerStyle}>
          <Typography variant={TypographyVariant.heading4}>
            Multiple Date selection
          </Typography>
          <Spacing />
          <Calendar
            startDate={startDate}
            selectedDates={multipleSelectedDates}
            hasMultipleDateSelection
            noShiftsDates={noShiftsDates}
            bookedDates={bookedDates}
            unavailableDates={unavailableDates}
            inactiveDates={inactiveDates}
            onDateSelection={(dates) => setMultipleSelectedDates(dates)}
          />
        </Container>
        <Container containerStyle={containerStyle}>
          <Typography variant={TypographyVariant.heading4}>
            Single Date Range selection
          </Typography>
          <Spacing />
          <Calendar
            startDate={startDate}
            hasSingleDateRange
            initialSingleDateRange={initialSingleSelectedRange}
            noShiftsDates={noShiftsDates}
            bookedDates={bookedDates}
            unavailableDates={unavailableDates}
            inactiveDates={inactiveDates}
          />
        </Container>
        <Container containerStyle={containerStyle}>
          <Typography variant={TypographyVariant.heading4}>
            Multiple Date Range selection
          </Typography>
          <Spacing />
          <Calendar
            startDate={startDate}
            hasMultipleDateRange
            initialMultipleDateRange={initialMultipleSelectedRanges}
            noShiftsDates={noShiftsDates}
            bookedDates={bookedDates}
            unavailableDates={unavailableDates}
            inactiveDates={inactiveDates}
          />
        </Container>
      </Container>
    </ScrollView>
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
