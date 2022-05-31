/**
 * Required to retrieve the previous Month from current Month
 * @param date
 * @param numberOfMonths
 * @returns date with previous month
 */

export const getPreviousMonth = (date: Date, numberOfMonths: number) => {
  return new Date(date.getFullYear(), date.getMonth() - numberOfMonths);
};
