import { MonthRange } from '../DatePickerHeader';

export const getMonthRange = ({
  startMonth,
  endMonth,
}: MonthRange): string[] => {
  const formatter = new Intl.DateTimeFormat('default', { month: 'long' });
  const months: string[] = [];
  for (let month = startMonth; month <= endMonth; month++) {
    const sampleDate = new Date(2020, month, 1);
    months.push(formatter.format(sampleDate));
  }
  return months;
};
