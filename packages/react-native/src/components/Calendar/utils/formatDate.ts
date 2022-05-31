/**
 * Required to format date as a string for calendar package
 * @param date
 * @returns string e.g. 2022-04-01
 */

export const formatDate = (date: Date) => {
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};
