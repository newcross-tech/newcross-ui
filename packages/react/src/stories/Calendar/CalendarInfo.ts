const TITLE = 'Date Picker';
const DESCRIPTION =
  'Date Pickers allow users to select dates from a calendar. <br/>' +
  'Currently, our design system supports three variations: single day selection, date range selection, and a header with dropdowns for month and year selection.';

const DO = [
  'Use single day select for standard date selection scenarios.',
  'Use range select for applications like booking or scheduling where a start and end date are needed.',
  'Use the month/year dropdown header for quick navigation to a specific month or year.',
];

const DONT = [
  'Assume that additional variations (like time selection) are supported unless documented.',
  'Modify the component’s core styling without referring to the design system guidelines.',
  'Expect the Date Picker to handle configurations beyond the documented variations.',
];

export { TITLE, DESCRIPTION, DO, DONT };
