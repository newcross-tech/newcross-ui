const TITLE = 'TimePicker';
const DESCRIPTION =
  'Our TimePicker component allows users to select a time from a dynamically generated list of options. ' +
  'The options are generated based on a starting time, an optional time window, a step interval, and an offset. ' +
  'It supports flexible input parsing, including shorthand entries like "730", "7:30", "7pm", and converts them into a normalized 24-hour format. ' +
  'Additionally, it clearly labels options that belong to the next or previous day. ' +
  'This component expects a baseDate prop as a Date object and returns options with values as Date objects, ensuring robust time handling. ' +
  'Furthermore, the picker supports a disabled state – it will remain disabled if the disabled prop is true or if no baseDate is provided.<br/><br/>' +
  'Built on top of the Select component, the TimePicker inherits all its features, including custom filtering and styling capabilities. ';

const DO = [
  'Use the TimePicker component when you need users to select a time in a consistent 24-hour format.',
  'Provide a baseDate prop (a Date object) to define the starting point for time options.',
  'Configure the component with props like startTime, offset, step, and duration to suit your design needs.',
  'Utilize the disabled state when time selection should be temporarily deactivated.',
  'Ensure proper validation is applied if full time accuracy is required.',
];

const DONT = [
  'Override the internal time generation logic without understanding the implications on time labeling.',
  'Use the component without providing a valid baseDate or startTime.',
  'Change the default formatting behavior without ensuring compatibility with shorthand inputs.',
];

export { TITLE, DESCRIPTION, DO, DONT };
