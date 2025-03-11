import { YearRange } from '../DatePickerHeader';

export const getYearRange = ({ yearsAgo, yearsAhead }: YearRange): number[] => {
  const currentYear = new Date().getFullYear();
  const years: number[] = [];
  for (let y = currentYear - yearsAgo; y <= currentYear + yearsAhead; y++) {
    years.push(y);
  }
  return years;
};
