import React from 'react';
import moment from 'moment';
import { Pressable, View } from 'react-native';
import { faCircleCheck } from '@fortawesome/pro-solid-svg-icons/faCircleCheck';
import { faCircleSmall } from '@fortawesome/pro-solid-svg-icons/faCircleSmall';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import useTheme from '../../../hooks/useTheme';
import { CalendarProps } from '../Calendar';
import Typography, { TypographyVariant } from '../../Typography';
import { DateData } from 'react-native-calendars';
import dayComponentStyles from './DayComponent.style';
// import { native } from '@newcross-ui/design-tokens';

export type DayComponentProps = {
  date?: DateData;
  onDayPress: (date: DateData) => void;
  theme?: CalendarProps['theme'];
  marking?: any;
  state?: string;
  testID?: string;
  availableDates?: string[];
  unavailableDates?: string[];
  bookedDates?: string[];
  selectedDates?: string[] | null;
};

const CALENDAR_DATE_TIME_FORMAT = 'YYYY-MM-DD';
const currentDate = moment().format(CALENDAR_DATE_TIME_FORMAT);

export const DayComponent = ({
  date,
  onDayPress,
  theme,
  marking,
  state,
  testID,
  availableDates,
  unavailableDates,
  bookedDates,
  selectedDates,
}: DayComponentProps) => {
  const {
    SpacingBase12,
    SpacingBase8,
    ColorBaseGreen200,
    ColorBaseBlue400,
    ColorSemanticsWarning100,
    CalendarDaysSelectedColor,
  } = useTheme();

  const { dayTextColor, textDisabledColor } = theme || {};
  const { customContainerStyle, disabled, customTextStyle } = marking || {};

  const isDisabled = disabled || state === 'disabled';
  const isBooked = bookedDates?.includes(date?.dateString as string);
  const isCurrentDate = date?.dateString === currentDate;
  const isCurrentDateSelected = selectedDates?.includes(currentDate);
  const isSelected = selectedDates?.includes(date?.dateString as string);
  const isAvailable = availableDates?.includes(date?.dateString as string);
  const isUnavailable = unavailableDates?.includes(date?.dateString as string);
  const styles = dayComponentStyles(useTheme(), isAvailable, isSelected);

  const handlePress = () => onDayPress?.(date as DateData);

  const textStyle = () => {
    if (isCurrentDate && !isCurrentDateSelected && !isDisabled) {
      return {
        color: ColorBaseBlue400,
      };
    }
    if (isUnavailable) {
      return {
        color: ColorSemanticsWarning100,
      };
    }
    if (isSelected) {
      return {
        color: CalendarDaysSelectedColor,
      };
    }

    return {
      color: isDisabled
        ? textDisabledColor
        : customTextStyle?.color || dayTextColor,
    };
  };
  const uniqueTestID = `${testID}-${date?.year}-${date?.month}-${date?.day}`;

  return (
    <Pressable
      testID={uniqueTestID}
      onPress={handlePress}
      style={[styles.dayStyle, customContainerStyle]}
      disabled={isDisabled}
    >
      <Typography
        variant={TypographyVariant.paragraph2}
        style={textStyle()}
        testID={`${testID}-text`}
      >
        {date?.day}
      </Typography>
      {isBooked && (
        <View style={styles.dayIcon} testID={`${testID}-icon`}>
          <FontAwesomeIcon
            icon={faCircleCheck}
            size={SpacingBase12}
            color={ColorBaseGreen200}
          />
        </View>
      )}
      {isCurrentDate && !isCurrentDateSelected && (
        <View style={styles.currentDayIcon} testID={'current-day-icon'}>
          <FontAwesomeIcon
            icon={faCircleSmall}
            size={SpacingBase8}
            color={ColorBaseBlue400}
          />
        </View>
      )}
    </Pressable>
  );
};
