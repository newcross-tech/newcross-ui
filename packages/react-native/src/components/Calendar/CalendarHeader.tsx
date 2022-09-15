import React, { useState } from 'react';
import Button, { ButtonVariant, ButtonSizes, ButtonCorners } from '../Button';
import { Direction } from './Calendar.types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/pro-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/pro-solid-svg-icons/faChevronRight';
import { getShortMonth, getPreviousMonth, getNextMonth } from './utils/index';
import useTheme from '../../hooks/useTheme';
import { FontWeight } from 'react-native-svg';
import { TypographyVariant } from '../Typography';

type CalendarHeaderProps = {
  direction: Direction;
  date: Date;
  onDateChange: (date: Date) => void;
};

const CalendarHeader = ({
  direction,
  date,
  onDateChange,
}: CalendarHeaderProps) => {
  const [previousMonth, setPreviousMonth] = useState(getPreviousMonth(date, 1));
  const [nextMonth, setNextMonth] = useState(getNextMonth(date, 1));
  const theme = useTheme();

  const onPreviousMonthPress = () => {
    onDateChange(getPreviousMonth(date, 1));
    setPreviousMonth(getPreviousMonth(date, 2));
    setNextMonth(date);
  };

  const onNextMonthPress = () => {
    onDateChange(getNextMonth(date, 1));
    setPreviousMonth(date);
    setNextMonth(getNextMonth(date, 2));
  };

  const buttonProps = {
    variant: ButtonVariant.secondary,
    size: ButtonSizes.small,
    corners: ButtonCorners.rounded,
  };

  return direction === 'left' ? (
    <Button
      testID={`calendar-component-previous`}
      leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}
      onPress={onPreviousMonthPress}
      {...buttonProps}
    >
      {getShortMonth(previousMonth)}
    </Button>
  ) : (
    <Button
      testID={`calendar-component-next`}
      rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
      onPress={onNextMonthPress}
      {...buttonProps}
    >
      {getShortMonth(nextMonth)}
    </Button>
  );
};

export default CalendarHeader;
