import { Meta, Story } from '@storybook/react';
import {
  Calendar,
  CalendarProps,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
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

const addDaysToCurrentDate = (daysOffset: number) =>
  moment().add(daysOffset, 'days').format('YYYY-MM-DD');

export const Variants = () => {
  const containerStyle = isWebPlatform
    ? { minWidth: '300px', maxWidth: '350px' }
    : {};

  return (
    <ScrollView>
      <Container
        containerStyle={{
          flexDirection: isWebPlatform ? 'row' : 'column',
          flexWrap: isWebPlatform ? 'wrap' : 'nowrap',
        }}
      >
        <Container containerStyle={containerStyle}>
          <Typography variant={TypographyVariant.heading7}>
            Single Date selection
          </Typography>
          <Spacing />
          <Calendar
            noShiftsDates={[addDaysToCurrentDate(2), addDaysToCurrentDate(3)]}
            bookedDates={[addDaysToCurrentDate(5), addDaysToCurrentDate(6)]}
            unavailableDates={[
              addDaysToCurrentDate(8),
              addDaysToCurrentDate(9),
            ]}
            inactiveDates={[addDaysToCurrentDate(10), addDaysToCurrentDate(11)]}
          />
        </Container>
        <Container containerStyle={containerStyle}>
          <Typography variant={TypographyVariant.heading7}>
            Multiple Date selection
          </Typography>
          <Spacing />
          <Calendar
            hasMultipleDateSelection
            noShiftsDates={[addDaysToCurrentDate(2), addDaysToCurrentDate(3)]}
            bookedDates={[addDaysToCurrentDate(5), addDaysToCurrentDate(6)]}
            unavailableDates={[
              addDaysToCurrentDate(8),
              addDaysToCurrentDate(9),
            ]}
            inactiveDates={[addDaysToCurrentDate(10), addDaysToCurrentDate(11)]}
          />
        </Container>
        <Container containerStyle={containerStyle}>
          <Typography variant={TypographyVariant.heading7}>
            Single Date Range selection
          </Typography>
          <Spacing />
          <Calendar
            hasSingleDateRange
            noShiftsDates={[addDaysToCurrentDate(2), addDaysToCurrentDate(3)]}
            bookedDates={[addDaysToCurrentDate(5), addDaysToCurrentDate(6)]}
            unavailableDates={[
              addDaysToCurrentDate(8),
              addDaysToCurrentDate(9),
            ]}
            inactiveDates={[addDaysToCurrentDate(10), addDaysToCurrentDate(11)]}
          />
        </Container>
        <Container containerStyle={containerStyle}>
          <Typography variant={TypographyVariant.heading7}>
            Multiple Date Range selection
          </Typography>
          <Spacing />
          <Calendar
            hasMultipleDateRange
            noShiftsDates={[addDaysToCurrentDate(2), addDaysToCurrentDate(3)]}
            bookedDates={[addDaysToCurrentDate(5), addDaysToCurrentDate(6)]}
            unavailableDates={[
              addDaysToCurrentDate(8),
              addDaysToCurrentDate(9),
            ]}
            inactiveDates={[addDaysToCurrentDate(10), addDaysToCurrentDate(11)]}
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
