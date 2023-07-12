const TITLE = 'Slider';
const DESCRIPTION =
  'Sliders allow users to view and select a value (or range) from the range along a bar. They are ideal for adjusting settings such as volume and brightness, or for applying image filters. \n' +
  'Changes made with sliders are immediate, allowing the user to make slider adjustments while determining a selection. Sliders shouldn’t be used to adjust settings with any delay in providing user feedback.';

const DO = [
  'Every slider should have a label. A slider without a label is ambiguous and not accessible. Write the label in sentence case.',
];

const DONT = ['Change the size or colour of the slider.'];

export { TITLE, DESCRIPTION, DO, DONT };
