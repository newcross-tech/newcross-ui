import { format } from 'date-fns';
import { MonthRange } from '../DatePickerHeader';

export const getMonthRange = ({
  startMonth,
  endMonth,
}: MonthRange): string[] => {
  const months: string[] = [];
  for (let month = startMonth; month <= endMonth; month++) {
    const sampleDate = new Date(2020, month, 1);
    months.push(format(sampleDate, 'MMMM'));
  }
  return months;
};
