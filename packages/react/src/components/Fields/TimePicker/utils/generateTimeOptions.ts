import { format, addMinutes, isSameDay, isAfter, isBefore } from 'date-fns';
import { Options } from 'react-select';
import { TimeOption } from '../TimePicker.types';

type GenerateTimeOptionsParams = {
  baseDate: Date;
  offset: number;
  step: number;
  duration: number;
};

export const generateTimeOptions = ({
  baseDate,
  offset,
  step,
  duration,
}: GenerateTimeOptionsParams): Options<TimeOption> => {
  const options: TimeOption[] = [];

  const startDate = addMinutes(new Date(baseDate), offset);
  const endTime = addMinutes(startDate, duration);

  let current = new Date(startDate);
  while (current <= endTime) {
    const optionTime = format(current, 'HH:mm');
    let label = optionTime;

    if (!isSameDay(current, baseDate)) {
      if (isAfter(current, baseDate)) {
        label += ' (Next Day)';
      } else if (isBefore(current, baseDate)) {
        label += ' (Previous Day)';
      }
    }
    options.push({ value: current.toISOString(), label });
    current = addMinutes(current, step);
  }

  return options;
};
