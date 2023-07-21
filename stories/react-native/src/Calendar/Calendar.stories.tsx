import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ExpandableCalendar,
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
import moment from 'moment';

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

  const [initialSingleSelectedRange] = useState(['2023-01-24', '2023-01-27']);

  const [initialMultipleSelectedRanges] = useState([
    ['2023-01-24', '2023-01-27'],
    ['2023-01-28', '2023-01-30'],
  ]);

  const [noShiftsDates] = useState(['2023-01-15', '2023-01-16']);

  const [bookedDates] = useState(['2023-01-17', '2023-01-18', '2023-01-25']);
  const [unavailableDates] = useState([
    '2023-01-19',
    '2023-01-20',
    '2023-01-25',
  ]);
  const [availableDates] = useState(['2023-01-23', '2023-01-24', '2023-01-25']);

  const [inactiveDates] = useState(['2023-01-21', '2023-01-22']);

  const [selectedExpandableDates, setSelectedExpandableDates] = useState<
    string[]
  >([]);
  const handleDayPress = (date: string) => {
    setSelectedExpandableDates(() => [date]);
  };

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
            Expandable Calendar
          </Typography>
          <Spacing />
          <ExpandableCalendar
            date={moment(startDate).format('YYYY-MM-DD')}
            startDate={startDate}
            selectedDates={selectedExpandableDates}
            bookedDates={bookedDates}
            onDayPress={(day) =>
              handleDayPress(moment(day.dateString).format('YYYY-MM-DD'))
            }
            availableDates={availableDates}
            unavailableDates={unavailableDates}
            leftArrowImageSource={require('./img/previous.png')}
            rightArrowImageSource={require('./img/next.png')}
          />
        </Container>
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
