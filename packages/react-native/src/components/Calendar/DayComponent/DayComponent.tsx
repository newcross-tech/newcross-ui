import React, { useEffect } from 'react';
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
import { FontWeight } from '../../../types';

export type DayComponentProps = {
  date?: DateData;
  onDayPress?: (date: DateData) => void;
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
    DayComponentBookedIconSize,
    DayComponentCurrentDateIconSize,
    DayComponentBookedIconColor,
    DayComponentCurrentDateIconColor,
    DayComponentTextColorUnavailable,
    DayComponentTextColorSelected,
    DayComponentTextColorUnavailableSelected,
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
  const isUnavaleableAndSelected = isUnavailable && isSelected;

  const styles = dayComponentStyles(useTheme(), isAvailable, isSelected);

  const handlePress = () => onDayPress?.(date as DateData);

  const textStyle = () => {
    switch (true) {
      case isCurrentDate && !isCurrentDateSelected && !isDisabled:
        return {
          color: DayComponentCurrentDateIconColor,
        };
      case isUnavaleableAndSelected:
        return {
          color: DayComponentTextColorUnavailableSelected,
        };
      case isUnavailable:
        return {
          color: DayComponentTextColorUnavailable,
        };
      case isSelected:
        return {
          color: DayComponentTextColorSelected,
        };
      case isDisabled:
        return {
          color: textDisabledColor,
        };
      default:
        return {
          color: customTextStyle?.color || dayTextColor,
        };
    }
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
        variant={
          isSelected ? TypographyVariant.heading4 : TypographyVariant.paragraph2
        }
        style={textStyle()}
        testID={`${testID}-text`}
      >
        {date?.day}
      </Typography>
      {isBooked && (
        <View style={styles.dayIcon} testID={`${uniqueTestID}-icon`}>
          <FontAwesomeIcon
            icon={faCircleCheck}
            size={DayComponentBookedIconSize}
            color={DayComponentBookedIconColor}
          />
        </View>
      )}
      {isCurrentDate && !isCurrentDateSelected && (
        <View style={styles.currentDayIcon} testID={'current-day-icon'}>
          <FontAwesomeIcon
            icon={faCircleSmall}
            size={DayComponentCurrentDateIconSize}
            color={DayComponentCurrentDateIconColor}
          />
        </View>
      )}
    </Pressable>
  );
};
