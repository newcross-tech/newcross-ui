import { format, addMinutes } from 'date-fns';
import { Options } from 'react-select';

type GenerateOptionsParams = {
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
}: GenerateOptionsParams): Options<{ value: Date; label: string }> => {
  const options: { value: Date; label: string }[] = [];

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
