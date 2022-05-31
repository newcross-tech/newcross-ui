/**
 * Required to retrieve the next Month from current Month
 * @param date
 * @param numberOfMonths
 * @returns date with next month
 */

export const getNextMonth = (date: Date, numberOfMonths: number) => {
  return new Date(date.getFullYear(), date.getMonth() + numberOfMonths);
};
