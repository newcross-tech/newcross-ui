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
import styles from './DayComponent.style';
// import { native } from '@newcross-ui/design-tokens';

const {
  SpacingBase12,
  SpacingBase8,
  ColorBaseGreen200,
  ColorBaseBlue400,
  CalendarDaysSelectedBackgroundColor,
} = useTheme();

export type DayComponentProps = {
  date?: DateData;
  onPress?: (date?: DateData | undefined) => void;
  theme?: CalendarProps['theme'];
  marking?: any;
  state?: string;
  testID?: string;
  staffBookedDates?: string[];
  selectedDates?: string[] | null;
};

const CALENDAR_DATE_TIME_FORMAT = 'YYYY-MM-DD';
const currentDate = moment().format(CALENDAR_DATE_TIME_FORMAT);

export const DayComponent = ({
  date,
  onPress,
  theme,
  marking,
  state,
  testID,
  staffBookedDates,
  selectedDates,
}: DayComponentProps) => {
  const { dayTextColor, textDisabledColor } = theme || {};
  const { customContainerStyle, disabled, customTextStyle } = marking || {};

  const isDisabled = disabled || state === 'disabled';
  const isSelected =
    customContainerStyle?.backgroundColor ===
    CalendarDaysSelectedBackgroundColor;
  const isBooked = staffBookedDates?.includes(date?.dateString as string);
  const isCurrentDate = date?.dateString === currentDate;
  const isCurrentDateSelected = selectedDates?.includes(currentDate);

  const handlePress = () => onPress?.(date);

  const textStyle = () => {
    if (isCurrentDate && !isCurrentDateSelected && !isDisabled) {
      return {
        color: ColorBaseBlue400,
      };
    }

    return {
      color: isDisabled
        ? textDisabledColor
        : customTextStyle?.color || dayTextColor,
    };
  };

  const dayVariant = isSelected
    ? TypographyVariant.heading4
    : TypographyVariant.paragraph2;

  return (
    <Pressable
      testID={testID}
      onPress={handlePress}
      style={[styles.dayStyle, customContainerStyle]}
      disabled={isDisabled}
    >
      <Typography
        variant={dayVariant}
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
