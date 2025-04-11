import { format, addMinutes } from 'date-fns';
import { Options } from 'react-select';

type GenerateTimeOptionsParams = {
  baseDate: Date;
  offset: number;
  step: number;
  duration: number;
};

export type TimeOption = {
  value: Date;
  label: string;
};

export const generateTimeOptions = ({
  baseDate,
  offset,
  step,
  duration,
}: GenerateTimeOptionsParams): Options<TimeOption> => {
  const options: TimeOption[] = [];

  // Create the start date by applying the offset to the original base date.
  const startDate = addMinutes(new Date(baseDate), offset);
  const endTime = addMinutes(startDate, duration);

  let current = new Date(startDate);
  while (current <= endTime) {
    const optionTime = format(current, 'HH:mm');
    let label = optionTime;

    // Append day indicators if the current option's day is different from the baseDate's day.
    if (current.getDate() > baseDate.getDate()) {
      label += ' (Next Day)';
    } else if (current.getDate() < baseDate.getDate()) {
      label += ' (Previous Day)';
    }
    options.push({ value: new Date(current), label });
    current = addMinutes(current, step);
  }

  return options;
};
