const TITLE = 'Floating Action Button Group';

const DESCRIPTION =
  'Floating Action Button Group is a group of buttons (2 or more) that trigger an action.' +
  '\n\n' +
  'In our case the ‘ButtonGroup - Filter’ is used to refine a list of results, triggering the ‘Bottom Sheet’ component to open with filter options for the user to choose from.' +
  '\n\n' +
  'The position of the ‘ButtonGroup - Filter’ is fixed and situated at the bottom center of the device screen.  It should be placed above all other components, so that it is visible to the user at all times.' +
  '\n\n' +
  'Confirmation tick optional based on app level rules';

const DO = [
  'Use ‘ButtonGroup - Filter’ when a list of results have the option to be filtered.',
  'Position bottom center of the device screen.',
  'Make sure the ‘ButtonGroup - Filter’ remains a sticky component, and sits on top of all other components.',
  'Change the labels and icons to suit to the context.',
];

const DONT = [
  'Change colours of the background, copy, icons or confirmation ticks.',
  'Remove the drop shadow applied.',
  'Use without a label.',
];

export { TITLE, DESCRIPTION, DO, DONT };
