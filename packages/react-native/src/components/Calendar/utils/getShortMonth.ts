/**
 * Used to get the short month name
 * @param date
 * @returns string e.g. Mar
 */
export const getShortMonth = (date: Date) => {
  const initialDate = date.toDateString();
  return initialDate.substring(4, 7);
};
