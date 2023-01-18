import { Meta, Story } from '@storybook/react';
import {
  Calendar,
  CalendarProps,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import { ScrollView } from 'react-native-gesture-handler';
import useState from 'storybook-addon-state';
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

  const [initialSelectedDates, setInitialSelectedDates] = useState(
    'initialSelectedDates',
    ['2023-01-24']
  );
  const [noShiftsDates, setNoShiftsDates] = useState('noShiftsDates', [
    '2023-01-15',
    '2023-01-16',
  ]);
  const [bookedDates, setBookedDates] = useState('bookedDates', [
    '2023-01-17',
    '2023-01-18',
  ]);
  const [unavailableDates, setUnavailableDates] = useState('unavailableDates', [
    '2023-01-19',
    '2023-01-20',
  ]);
  const [inactiveDates, setInactiveDates] = useState('inactiveDates', [
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
            initialSelectedDates={initialSelectedDates}
            noShiftsDates={noShiftsDates}
            bookedDates={bookedDates}
            unavailableDates={unavailableDates}
            inactiveDates={inactiveDates}
          />
        </Container>
        <Container containerStyle={containerStyle}>
          <Typography variant={TypographyVariant.heading4}>
            Multiple Date selection
          </Typography>
          <Spacing />
          <Calendar
            hasMultipleDateSelection
            noShiftsDates={noShiftsDates}
            bookedDates={bookedDates}
            unavailableDates={unavailableDates}
            inactiveDates={inactiveDates}
          />
        </Container>
        <Container containerStyle={containerStyle}>
          <Typography variant={TypographyVariant.heading4}>
            Single Date Range selection
          </Typography>
          <Spacing />
          <Calendar
            hasSingleDateRange
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
            hasMultipleDateRange
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
