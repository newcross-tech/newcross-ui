import { formatDate } from './formatDate';

const createDateRange = (
  [startDateString, endDateString]: Array<string>,
  datesToExclude?: Array<string>
) => {
  const dateRange: Array<Date> = [];

  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  do {
    const nextDate = new Date(startDate);
    if (!datesToExclude?.includes(formatDate(nextDate))) {
      dateRange.push(nextDate);
    }
    startDate.setDate(startDate.getDate() + 1);
  } while (startDate <= endDate);

  return dateRange.map((date) => formatDate(date));
};

export default createDateRange;
